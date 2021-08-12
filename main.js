import {getCategories} from './modules/api.js'


function setCategoryListOptions(data){
    const categorySelect = document.querySelector("#category");
    const categories = data.trivia_categories.map(
      (category) => `<option value=${category.id}>${category.name}</option>`
    );
    categorySelect.innerHTML = categories
}


getCategories(setCategoryListOptions)
