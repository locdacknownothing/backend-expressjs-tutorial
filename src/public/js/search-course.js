const searchInput = document.getElementsById("search-input");
const searchButton = document.getElementsByClassName("btn-search");
const searchForm = document.forms["search-form"];

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  restoreHiddenForm.action = `?q=${searchInput.value}`;
  restoreHiddenForm.submit();
});
