import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

// Tried in order. On the free tier each model has its own daily quota and is
// often overloaded, so a lighter, faster model backs up the main one.
const MODELS = ["gemini-3.8-flash", "gemini-3.5-flash-lite"];
// 429 = quota exceeded, 500/503/504 = Google side overloaded or down.
const FALLBACK_STATUSES = new Set([429, 500, 503, 504]);
// A fallback call takes ~4 s: past this point it would not finish before the
// Netlify function timeout (~10 s), so we give up instead.
const FALLBACK_DEADLINE_MS = 5000;
const DATA_DIR = path.join(process.cwd(), "DATA");
const PROMPT_FILE = path.join(process.cwd(), "PROMPT", "Quizz7.txt");

// The prompt asks for "between MIN and MAX" questions. One call can only write
// about 5 before the Netlify function timeout (~10 s), so a longer quiz is
// split into parallel calls, each on its own part of the notes.
const MIN_QUESTIONS = 3;
const MAX_QUESTIONS = 10;
const MAX_QUESTIONS_PER_CALL = 5;
const MIN_QUOTE_LENGTH = 20;
// More chapters means a longer prompt and a slower answer, so the count is capped.
const MAX_CHAPTERS = 8;

class BadRequestError extends Error {}
class UpstreamError extends Error {}

// Finds the chapter files by whitelisting each level against what really exists
// in DATA/. The client's values are only ever compared to directory entries,
// never joined into a path, so "../" tricks cannot reach files outside DATA/.
async function resolveChapters(category, course, requestedChapters) {
  const categories = await readdir(DATA_DIR, { withFileTypes: true });
  const categoryDir = categories.find(
    (entry) => entry.isDirectory() && entry.name === category
  );
  if (!categoryDir) throw new BadRequestError("Unknown category");
  const categoryPath = path.join(DATA_DIR, categoryDir.name);

  // Course folders are named "<code> - <name>", e.g. "BUS13-2 - Designing Operations from Scratch".
  const courses = await readdir(categoryPath, { withFileTypes: true });
  const courseDir = courses.find(
    (entry) => entry.isDirectory() && entry.name.startsWith(`${course} - `)
  );
  if (!courseDir) throw new BadRequestError("Unknown course");
  const coursePath = path.join(categoryPath, courseDir.name);

  // Keeps the course order (00, 01, 02...) whatever order the client sent,
  // and ignores duplicates.
  const files = await readdir(coursePath, { withFileTypes: true });
  const wanted = new Set(requestedChapters);
  const chapterFiles = files.filter(
    (entry) => entry.isFile() && entry.name.endsWith(".md") && wanted.has(entry.name.slice(0, -3))
  );
  if (chapterFiles.length !== wanted.size) throw new BadRequestError("Unknown chapter");

  return {
    courseName: courseDir.name.slice(`${course} - `.length),
    chapterPaths: chapterFiles
      .map((entry) => path.join(coursePath, entry.name))
      .sort(),
  };
}

// Replaces every {{KEY}} in a single pass, so placeholders that happen to
// appear inside the course notes are left untouched. A replacer function is
// used because a plain string would give "$&" or "$1" in the notes a special
// meaning.
function fillTemplate(template, values) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) =>
    key in values ? String(values[key]) : match
  );
}

function questionCount(numQuestions) {
  const requested = Number.isInteger(numQuestions) ? numQuestions : MAX_QUESTIONS;
  return Math.min(Math.max(requested, MIN_QUESTIONS), MAX_QUESTIONS);
}

// Cuts the notes into `parts` pieces of similar size, only at blank lines so
// no paragraph (and, with several chapters, rarely a chapter) is cut in two.
// Each call gets a different piece, so the calls don't ask the same questions.
// Notes with too few paragraphs give fewer pieces.
function splitNotes(notes, parts) {
  const paragraphs = notes.split(/\n\s*\n/);
  const targetSize = notes.length / parts;
  const pieces = [];
  let current = [];
  let currentSize = 0;
  for (const paragraph of paragraphs) {
    current.push(paragraph);
    currentSize += paragraph.length;
    if (currentSize >= targetSize && pieces.length < parts - 1) {
      pieces.push(current.join("\n\n"));
      current = [];
      currentSize = 0;
    }
  }
  pieces.push(current.join("\n\n"));
  return pieces.filter((piece) => piece.trim());
}

// One Gemini call per piece of the notes, each asking for its share of the quiz.
function planCalls(notes, count) {
  const pieces = splitNotes(notes, Math.ceil(count / MAX_QUESTIONS_PER_CALL));
  const max = Math.min(Math.ceil(count / pieces.length), MAX_QUESTIONS_PER_CALL);
  const min = Math.min(Math.ceil(MIN_QUESTIONS / pieces.length), max);
  return pieces.map((piece) => ({ notes: piece, min, max }));
}

// The same question can come back from two calls when the pieces overlap in
// content; only the first one is kept.
function dropDuplicateQuestions(questions) {
  const seen = new Set();
  return questions.filter((question) => {
    if (typeof question.question !== "string") return true;
    const key = question.question.replace(/\s+/g, " ").trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// The key is read on the server only: the browser never sees it.
async function askGemini(prompt) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const startedAt = Date.now();

  for (const model of MODELS) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          // Less "thinking" before answering keeps us under the function timeout.
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
        },
      });
      return response.text;
    } catch (err) {
      // Keep the details (quota, network, bad key) in the logs, not in the response.
      console.error(`Gemini call failed with ${model}:`, err);
      const canFallBack =
        FALLBACK_STATUSES.has(err.status) && Date.now() - startedAt < FALLBACK_DEADLINE_MS;
      if (!canFallBack) break;
    }
  }
  throw new UpstreamError("The quiz generator is unavailable, try again later");
}

// Only checks that the answer is a quiz at all. Validating each question
// (4 options, answer_index in range...) is a separate task.
function parseQuiz(rawText) {
  let quiz;
  try {
    quiz = JSON.parse(rawText);
  } catch {
    console.error("Model returned invalid JSON:", rawText);
    throw new UpstreamError("The quiz generator returned an invalid answer, try again");
  }
  if (!Array.isArray(quiz?.questions) || quiz.questions.length === 0) {
    console.error("Model returned JSON without questions:", rawText);
    throw new UpstreamError("The quiz generator returned an invalid answer, try again");
  }
  return quiz;
}

// Chapters are hard-wrapped, so a sentence quoted by the model can span
// several lines in the notes: quotes are compared with whitespace collapsed.
function collapseWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

// Drops every question whose source_quote cannot be found in the notes:
// a quote the model made up means the question may not be grounded either.
// Very short quotes ("NPV") would match almost anything, so they are refused.
function keepGroundedQuestions(questions, notes) {
  const searchableNotes = collapseWhitespace(notes);
  const grounded = questions.filter((question) => {
    if (typeof question.source_quote !== "string") return false;
    const quote = collapseWhitespace(question.source_quote);
    return quote.length >= MIN_QUOTE_LENGTH && searchableNotes.includes(quote);
  });

  const dropped = questions.length - grounded.length;
  if (dropped > 0) {
    console.warn(`Dropped ${dropped} question(s) whose source_quote is not in the notes`);
  }
  if (grounded.length === 0) {
    throw new UpstreamError("The quiz generator returned no question backed by the chapter, try again");
  }
  return grounded;
}

export default async (req) => {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return Response.json({ error: "Server is not configured" }, { status: 500 });
  }

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed, use POST" }, { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON" }, { status: 400 });
  }

  const { category, course, chapters, numQuestions } = body ?? {};
  if (![category, course].every((value) => typeof value === "string" && value)) {
    return Response.json({ error: "category and course are required strings" }, { status: 400 });
  }
  if (
    !Array.isArray(chapters) ||
    chapters.length === 0 ||
    chapters.length > MAX_CHAPTERS ||
    !chapters.every((value) => typeof value === "string" && value)
  ) {
    return Response.json(
      { error: `chapters must be a list of 1 to ${MAX_CHAPTERS} chapter names` },
      { status: 400 }
    );
  }

  try {
    const { courseName, chapterPaths } = await resolveChapters(category, course, chapters);
    const count = questionCount(numQuestions);

    const [template, ...chapterNotes] = await Promise.all([
      readFile(PROMPT_FILE, "utf8"),
      ...chapterPaths.map((chapterPath) => readFile(chapterPath, "utf8")),
    ]);
    const notes = chapterNotes.join("\n\n");

    // The calls run side by side, so the quiz takes about as long as one call.
    // If one of them fails, the questions of the others are still returned.
    const results = await Promise.allSettled(
      planCalls(notes, count).map(async (call) => {
        const prompt = fillTemplate(template, {
          COURSE_NAME: courseName,
          COURSE_NOTES: call.notes,
          MIN_QUESTIONS: call.min,
          MAX_QUESTIONS: call.max,
        });
        return parseQuiz(await askGemini(prompt)).questions;
      })
    );
    const answered = results.filter((result) => result.status === "fulfilled");
    if (answered.length === 0) throw results[0].reason;

    const generated = dropDuplicateQuestions(answered.flatMap((result) => result.value));
    // Quotes are checked against all the notes: a piece is part of them.
    const questions = keepGroundedQuestions(generated, notes).slice(0, count);

    // The course name comes from DATA/, not from the model, so it is always right.
    return Response.json({ course: courseName, questions });
  } catch (err) {
    if (err instanceof BadRequestError) {
      return Response.json({ error: err.message }, { status: 400 });
    }
    if (err instanceof UpstreamError) {
      return Response.json({ error: err.message }, { status: 502 });
    }
    console.error("generate-quiz failed:", err);
    return Response.json({ error: "Internal error while preparing the quiz" }, { status: 500 });
  }
};
