var questions = [];
var currentQuestion = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


function startGame(rawQuestions) {
  questions = rawQuestions.map((q) => ({
    question: q.question,
    answers: shuffle([q.correct_answer, ...q.incorrect_answers]),
    correct: q.correct_answer,
  }));
  console.log(questions);
}

export { startGame };
