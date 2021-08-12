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
  if (currentQuestion === questions.length - 1) {
    btnNext.innerHTML = "Play Again";
  }
  btnNext.classList.remove("hide");
}
function colorCorrectAnswerButton() {
  for (let answerBtn of answerElements) {
    if (isCorrectAnswer(answerBtn.getAttribute("data-idx"))) {
      answerBtn.classList.add("correct-answer");
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
    answerBtn.classList.remove("correct-answer")
    answerBtn.classList.remove("incorrect-answer")
  }
}
function setBtnColor(btn, selectedIdx) {
  btn.classList.add(
    isCorrectAnswer(selectedIdx) ? "correct-answer" : "incorrect-answer"
  );
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
  if (btnNext.innerHTML === "Play Again") {
    window.location = window.location;
    return;
  }
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
