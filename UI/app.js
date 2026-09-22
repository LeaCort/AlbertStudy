// Placeholder until the course list comes from data/courses/ via a real endpoint.
const COURSES = ["Microeconomics", "Statistics"];
const NUM_QUESTIONS = 5;

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

const courseGrid = document.getElementById("course-grid");
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
let selectedCourse = null;

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("hidden", key !== name);
  });
}

function populateCourses() {
  COURSES.forEach((course) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "course-card";
    card.textContent = course;
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", () => selectCourse(course));
    courseGrid.appendChild(card);
  });
}

function selectCourse(course) {
  selectedCourse = course;
  generateBtn.disabled = false;

  courseGrid.querySelectorAll(".course-card").forEach((card) => {
    const isSelected = card.textContent === course;
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

async function fetchQuiz(course) {
  const response = await fetch("/.netlify/functions/generate-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ course, numQuestions: NUM_QUESTIONS }),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function handleGenerate() {
  if (!selectedCourse) return;
  showScreen("loading");

  try {
    quiz = await fetchQuiz(selectedCourse);
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

  quizCourseName.textContent = quiz.course;
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
}

function handleRestart() {
  quiz = null;
  currentIndex = 0;
  score = 0;
  selectedCourse = null;
  generateBtn.disabled = true;
  courseGrid.querySelectorAll(".course-card").forEach((card) => {
    card.classList.remove("selected");
    card.setAttribute("aria-pressed", "false");
  });
  showScreen("select");
}

generateBtn.addEventListener("click", handleGenerate);
retryBtn.addEventListener("click", handleGenerate);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", handleRestart);

populateCourses();
showScreen("select");
