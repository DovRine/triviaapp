var questions = [];
var currentQuestion = 0;

const questionSection = document.querySelector("#question");
const answerElements = questionSection.querySelectorAll(".answer");
const btnNext = document.querySelector("#btnNext");
btnNext.addEventListener("click", showNextQuestion);

function assignAnswerButtonClickHandlers() {
  answerElements.forEach((el) => el.addEventListener("click", checkUserAnswer));
}
function checkUserAnswer(e) {
  const btn = e.target;
  const selectedIdx = btn.getAttribute("data-idx");
  setBtnColor(btn, selectedIdx);
  colorCorrectAnswerButton();
  btnNext.classList.remove("hide");
}
function colorCorrectAnswerButton() {
  for (let answerBtn of answerElements) {
    if (isCorrectAnswer(answerBtn.getAttribute("data-idx"))) {
      answerBtn.style.background = "lime";
    }
  }
}
function hideForm() {
  const form = document.querySelector("#questions-form");
  form.classList.add("hide");
}
function isCorrectAnswer(idx) {
  const correctAnswerIdx = questions[currentQuestion].correct;
  return idx === correctAnswerIdx;
}
function resetAnswerBtnStyles() {
  for (let answerBtn of answerElements) {
    answerBtn.style.background = "unset";
  }
}
function setBtnColor(btn, selectedIdx) {
  btn.style.background = isCorrectAnswer(selectedIdx) ? "lime" : "red";
}
function setGameQuestions(rawQuestions) {
  questions = rawQuestions.map((q) => {
    const answers = shuffle([q.correct_answer, ...q.incorrect_answers]);
    return {
      question: q.question,
      answers,
      correct: `${answers.indexOf(q.correct_answer)}`,
    };
  });
}
function showCurrentQuestion() {
  const { question, answers } = questions[currentQuestion];
  questionSection.querySelector(".question").innerHTML = question;
  for (let i = 0; i < answers.length; i++) {
    answerElements[i].innerHTML = answers[i];
    answerElements[i].setAttribute("data-idx", i);
  }
  questionSection.classList.remove("hide");
  btnNext.classList.add("hide");
}
function showNextQuestion() {
  currentQuestion++;
  resetAnswerBtnStyles();
  showCurrentQuestion();
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
  assignAnswerButtonClickHandlers();
  showCurrentQuestion();
}

export { startGame };
