async function getCategories(callback) {
  const categoryUrl = "https://opentdb.com/api_category.php";
  const response = await fetch(categoryUrl);
  const data = await response.json();
  callback(data);
}

export { getCategories };
