// Model pt articole: getAll
function Articles() {
  // this is a constructor fct
}

Articles.prototype.getAll = function() {
  return $.get("https://jsonplaceholder.typicode.com/posts");
}
// definim metodele pe prototype pt ca fiecare met sa fie stocata odata pe obiect