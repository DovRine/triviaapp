var questions = [];
var currentQuestion = 0

function startGame(rawQuestions) {
  questions = rawQuestions.map(q => ({
    question: q.question,
    answers: [q.correct_answer, ...q.incorrect_answers],
    correct: q.correct_answer,
})
  )
  console.log(questions)
}

export { startGame };
