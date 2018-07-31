window.addEventListener("load", function() {

  var containerEl = document.getElementById("games-list");
  var gamesModel = new Games();
  var gameGlobal;

  var createButton = document.getElementById("createButtonId");
  createButton.addEventListener("click", function() {
    window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/game.html?createNew=true";
  });

  var regenerateButton = document.getElementById("regenerateButtonId");
  regenerateButton.addEventListener("click", function() {
    gamesModel.generateAll();
  });

  gamesModel.getAll().then(function(response) {
    displayAllGames(response);
  });

  function displayAllGames(gamesData) {
    for (var i = 0; i < gamesData.length; i++) {
      gameGlobal = new Game(gamesData[i]);
      displayGame(gameGlobal);
    }
  }

  function displayGame(game) {
    var liEl = document.createElement('li');
    liEl.setAttribute("id", game._id);

    var titleEl = document.createElement('h1');
    titleEl.innerHTML = game.title;
    titleEl.style.color = "blue";
    titleEl.style.marginLeft = "5%";

    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/game.html?gameId=" + game._id;
    });

    var descriptionEl = document.createElement('p');
    descriptionEl.innerHTML = game.description;

    liEl.appendChild(titleEl);
    liEl.appendChild(descriptionEl);

    var updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";

    updateButton.addEventListener("click", function() {
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/game.html?gameId=" + game._id + "&edit=true";
    });


    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", function() {
      gameGlobal.deleteGame();
    });

    liEl.appendChild(updateButton);
    liEl.appendChild(deleteButton);

    containerEl.appendChild(liEl);
  

  }

  // https://games-world.herokuapp.com/regenerate-games
})