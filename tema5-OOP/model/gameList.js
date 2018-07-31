//Constructor function
function Games() {

}

Games.prototype.getAll = function() {
  return $.get("https://games-world.herokuapp.com/games");
}

Games.prototype.generateAll = function() {
  return $.get("https://games-world.herokuapp.com/regenerate-games")
    .then(function(response) {
      alert(response);
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/games.html";
    });
}