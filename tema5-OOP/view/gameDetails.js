var edit = false;
var createNew = false;
var game = new Game();
window.addEventListener("load", function() {

  var containerEl = document.getElementById("game-details");

  
  var gameId = getUrlParameter("gameId");
  if (gameId !== undefined) {
    game._id = gameId;
  }

  edit = getUrlParameter("edit");
  createNew = getUrlParameter("createNew");

  game.getGameDetails().then(function() {
    displayGameDetails(game);
  });


  function displayGameDetails(gameDetails) {
    var titleContainer = document.createElement("div");
    var descriptionContainer = document.createElement("div");
    var actionContainer = document.createElement("div");

    var titleEl;
    var descriptionEl;
    var actionButton;

    var backButton = document.createElement("button");
    backButton.innerHTML = "Back to games";
    backButton.addEventListener("click", function() {
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/games.html";
    });
    actionContainer.appendChild(backButton);

    if (edit === "true" || createNew === "true") {

      var titleName = document.createElement("p");
      titleName.innerHTML = "Insert the game's title";
      titleEl = document.createElement("input");
      titleEl.setAttribute("id", "titleInputId");
      titleContainer.appendChild(titleName);
      titleContainer.appendChild(titleEl);

      var descriptionName = document.createElement("p");
      descriptionName.innerHTML = "Insert the game's description";
      descriptionEl = document.createElement("textarea");
      descriptionEl.setAttribute("id", "descriptionInputId");
      descriptionContainer.appendChild(descriptionName);
      descriptionContainer.appendChild(descriptionEl);

      actionButton = document.createElement("button");
      actionButton.innerHTML = "SAVE";
      actionContainer.appendChild(actionButton);

      if (edit === "true") {
        titleEl.value = gameDetails.title;
        descriptionEl.value = gameDetails.description;

        actionButton.setAttribute("id", "update");
        actionButton.addEventListener("click", function() {
          game.updateGame(
            document.getElementById("titleInputId").value,
            document.getElementById("descriptionInputId").value
          )
        });
      } else {
        actionButton.setAttribute("id", "save");
        actionButton.addEventListener("click", function() {
          game.saveGame(
            document.getElementById("titleInputId").value,
            document.getElementById("descriptionInputId").value
          )
        });
      }
    } else {
      titleEl = document.createElement("h1");
      titleEl.innerHTML = gameDetails.title;
      titleContainer.appendChild(titleEl);

      descriptionEl = document.createElement("p");
      descriptionEl.innerHTML = gameDetails.description;
      descriptionContainer.appendChild(descriptionEl);
    }

    containerEl.appendChild(titleContainer);
    containerEl.appendChild(descriptionContainer);
    containerEl.appendChild(actionContainer);
    containerEl.style.border = "2px solid pink";
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }


});