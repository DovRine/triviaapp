function getCategories(callback) {
  const categoryUrl = "https://opentdb.com/api_category.php";
  fetch(categoryUrl)
    .then((response) => response.json())
    .then(callback);
}

export { getCategories };
