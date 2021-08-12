async function getCategories(callback) {
  const categoryUrl = "https://opentdb.com/api_category.php";
  const response = await fetch(categoryUrl);
  const data = await response.json();
  callback(data);
}

async function getQuestions({numQuestions, difficulty, category, callback}){
    const url = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
    const response = await fetch(url)
    const data = await response.json()
    callback(data.results)
}
export { getCategories, getQuestions };
