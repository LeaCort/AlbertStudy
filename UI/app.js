// CATALOG (categories > courses > chapters) comes from courses.js, which is
// generated from DATA/ by scripts/build-course-catalog.js.
const NUM_QUESTIONS = 5;
// A quiz mixing many chapters is slow to generate. Keep in sync with generate-quiz.js.
const MAX_CHAPTERS = 8;

// Front matter and reading lists make poor quiz material, so they get no quiz.
const SKIPPED = /^(preface|further reading|primary sources)/i;

// Used only when the generate-quiz function isn't reachable yet, so the UI
// can still be demoed/tested before the backend exists.
const SAMPLE_QUIZ = {
  course: "Sample",
  questions: [
    {
      question: "This is a sample question because the backend isn't connected yet.",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer_index: 1,
      source_quote: "Placeholder source quote from the notes.",
      difficulty: "easy",
    },
  ],
};

const screens = {
  select: document.getElementById("select-screen"),
  loading: document.getElementById("loading-screen"),
  error: document.getElementById("error-screen"),
  quiz: document.getElementById("quiz-screen"),
  results: document.getElementById("results-screen"),
};

const categoryTabs = document.getElementById("category-tabs");
const courseGrid = document.getElementById("course-grid");
const chapterSection = document.getElementById("chapter-section");
const chapterHeading = document.getElementById("chapter-heading");
const chapterList = document.getElementById("chapter-list");
const selectionHint = document.getElementById("selection-hint");
const generateBtn = document.getElementById("generate-btn");
const retryBtn = document.getElementById("retry-btn");
const errorMessage = document.getElementById("error-message");
const quizCourseName = document.getElementById("quiz-course-name");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const feedback = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const sourceQuote = document.getElementById("source-quote");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

let quiz = null;
let currentIndex = 0;
let score = 0;
let selectedCategory = CATALOG[0];
let selectedCourse = null;
let selectedChapters = new Set();

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("hidden", key !== name);
  });
}

function renderCategories() {
  categoryTabs.innerHTML = "";
  CATALOG.forEach((category) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "category-tab";
    tab.textContent = category.label;
    tab.setAttribute("aria-pressed", String(category === selectedCategory));
    tab.classList.toggle("selected", category === selectedCategory);
    tab.addEventListener("click", () => selectCategory(category));
    categoryTabs.appendChild(tab);
  });
}

function selectCategory(category) {
  selectedCategory = category;
  selectedCourse = null;
  selectedChapters = new Set();
  renderCategories();
  renderCourses();
  renderChapters();
}

function renderCourses() {
  courseGrid.innerHTML = "";
  selectedCategory.courses.forEach((course) => {
    const isSelected = course === selectedCourse;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "course-card";
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));

    const code = document.createElement("span");
    code.className = "course-code";
    code.textContent = course.code;
    const name = document.createElement("span");
    name.className = "course-name";
    name.textContent = course.name;
    card.append(code, name);

    card.addEventListener("click", () => selectCourse(course));
    courseGrid.appendChild(card);
  });
}

// On a phone the chapter list sits far below the course cards, so scroll to it.
function scrollToChapters() {
  if (window.matchMedia("(max-width: 720px)").matches) {
    chapterSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectCourse(course) {
  selectedCourse = course;
  selectedChapters = new Set();
  renderCourses();
  renderChapters();
  scrollToChapters();
}

// Ticked chapters in course order (not in the order they were ticked).
function chosenChapters() {
  return selectedCourse.chapters.filter((chapter) => selectedChapters.has(chapter.id));
}

function renderChapters() {
  chapterSection.classList.toggle("hidden", !selectedCourse);
  chapterList.innerHTML = "";
  if (!selectedCourse) return;

  selectedCourse.chapters
    .filter((chapter) => !SKIPPED.test(chapter.title))
    .forEach((chapter) => {
      const label = document.createElement("label");
      label.className = "chapter-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = selectedChapters.has(chapter.id);
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedChapters.add(chapter.id);
        } else {
          selectedChapters.delete(chapter.id);
        }
        updateSelection();
      });

      // File ids look like "03-internal-rate-of-return"; show the "03".
      const number = document.createElement("span");
      number.className = "chapter-number";
      number.textContent = chapter.id.split("-")[0];
      const title = document.createElement("span");
      title.textContent = chapter.title;

      label.append(checkbox, number, title);
      chapterList.appendChild(label);
    });

  updateSelection();
}

function updateSelection() {
  const count = selectedChapters.size;
  generateBtn.disabled = count === 0;
  generateBtn.textContent =
    count === 0 ? "Generate quiz" : `Generate quiz from ${count} chapter${count === 1 ? "" : "s"}`;
  selectionHint.textContent =
    count === 0
      ? `Tick up to ${MAX_CHAPTERS} chapters from this course.`
      : `${count} of ${MAX_CHAPTERS} chapters selected.`;

  // At the limit, the other chapters can't be ticked until one is unticked.
  chapterList.querySelectorAll("input:not(:checked)").forEach((box) => {
    box.disabled = count >= MAX_CHAPTERS;
  });
}

async function fetchQuiz() {
  const response = await fetch("/.netlify/functions/generate-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category: selectedCategory.id,
      course: selectedCourse.code,
      chapters: chosenChapters().map((chapter) => chapter.id),
      numQuestions: NUM_QUESTIONS,
    }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function handleGenerate() {
  if (!selectedCourse || selectedChapters.size === 0) return;
  showScreen("loading");

  try {
    quiz = await fetchQuiz();
  } catch (err) {
    // Backend isn't built yet in early sessions, fall back to a sample quiz
    // instead of dead-ending the demo.
    console.warn("generate-quiz call failed, using sample quiz:", err);
    quiz = SAMPLE_QUIZ;
  }

  currentIndex = 0;
  score = 0;
  renderQuestion();
}

function renderQuestion() {
  const question = quiz.questions[currentIndex];

  const chosen = chosenChapters();
  quizCourseName.textContent =
    `${selectedCourse.code} · ` + (chosen.length === 1 ? chosen[0].title : `${chosen.length} chapters`);
  questionCounter.textContent = `Question ${currentIndex + 1} of ${quiz.questions.length}`;
  progressFill.style.width = `${(currentIndex / quiz.questions.length) * 100}%`;
  questionText.textContent = question.question;

  optionsList.innerHTML = "";
  question.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.textContent = optionText;
    btn.addEventListener("click", () => handleAnswer(index));
    optionsList.appendChild(btn);
  });

  feedback.classList.add("hidden");
  showScreen("quiz");
  window.scrollTo(0, 0);
}

function handleAnswer(selectedIndex) {
  const question = quiz.questions[currentIndex];
  const optionButtons = optionsList.querySelectorAll(".option-btn");

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.answer_index) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  const isCorrect = selectedIndex === question.answer_index;
  if (isCorrect) {
    score += 1;
  }

  feedbackText.textContent = isCorrect ? "Correct!" : "Not quite.";
  sourceQuote.textContent = `"${question.source_quote}"`;
  feedback.classList.remove("hidden");
  // Keep the feedback and the Next button visible on small screens.
  feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function handleNext() {
  currentIndex += 1;
  if (currentIndex < quiz.questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  progressFill.style.width = "100%";
  scoreText.textContent = `You scored ${score} / ${quiz.questions.length}`;
  showScreen("results");
  window.scrollTo(0, 0);
}

// Back to the chapter list of the same course, ready to pick another quiz.
function handleRestart() {
  quiz = null;
  currentIndex = 0;
  score = 0;
  showScreen("select");
  scrollToChapters();
}

generateBtn.addEventListener("click", handleGenerate);
retryBtn.addEventListener("click", handleGenerate);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", handleRestart);

selectCategory(selectedCategory);
showScreen("select");
