import { getQuestions } from "./api.js";

var questions = [];
var currentQuestion = 0;

function hideForm() {
  const form = document.querySelector("#questions-form");
  form.classList.add("hide");
}
function setGameQuestions(rawQuestions) {
  questions = rawQuestions.map((q) => ({
    question: q.question,
    answers: shuffle([q.correct_answer, ...q.incorrect_answers]),
    correct: q.correct_answer,
  }));
}
function showCurrentQuestion() {
  const questionSection = document.querySelector("#question");
  const { question, answers } = questions[currentQuestion];
  questionSection.querySelector(".question").innerHTML = question;
  const answerElements = questionSection.querySelectorAll(".answer");
  for (let i = 0; i < answers.length; i++) {
    answerElements[i].innerHTML = answers[i];
  }
  questionSection.classList.remove("hide");
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function startGame(rawQuestions) {
  setGameQuestions(rawQuestions);
  hideForm();
  showCurrentQuestion();
}

export { startGame };
