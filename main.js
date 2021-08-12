import {getCategories, getQuestions} from './modules/api.js'
import {startGame} from './modules/game.js'

function setCategoryListOptions(data){
    const categorySelect = document.querySelector("#category");
    const categories = data.trivia_categories.map(
      (category) => `<option value=${category.id}>${category.name}</option>`
    );
    categorySelect.innerHTML = categories
}


getCategories(setCategoryListOptions)

const form = document.querySelector('#questions-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const numQuestions = form.querySelector('#numQuestions').value
    const difficulty = form.querySelector('#difficulty').value
    const category = form.querySelector('#category').value
    
    getQuestions({numQuestions, difficulty, category, callback: startGame})
})

