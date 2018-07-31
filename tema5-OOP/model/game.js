function Game(options) {
  options = options || {};
  this._id = options._id;
  this.title = options.title;
  this.description = options.description;
}

Game.prototype.getGameDetails = function() {
  var that = this;
  return $.get("https://games-world.herokuapp.com/games/" + that._id)
    .then(function(response) {
      that.title = response.title;
      that.description = response.description;
    });
}


Game.prototype.updateGame = function(title, description) {
  var that = this;
  return $.put("https://games-world.herokuapp.com/games/" + that._id, {
      title,
      description
    })
    .then(function(response) {
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/games.html";
    });
}


Game.prototype.saveGame = function(title, description) {
  var that = this;
  return $.post("https://games-world.herokuapp.com/games", {
      title,
      description
    })
    .then(function(response) {
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/games.html";
    });
}


Game.prototype.deleteGame = function() {
  var that = this;
  return $.delete("https://games-world.herokuapp.com/games/" + that._id)
    .then(function(response) {
      alert(response);
      window.location = "http://cursuri-crisankarina31262993.codeanyapp.com/tema5-OOP/template/games.html";
    });
}


$.put = function(url, data, callback, type) {

  if ($.isFunction(data)) {
    type = type || callback,
      callback = data,
      data = {}
  }

  return $.ajax({
    url: url,
    type: 'PUT',
    success: callback,
    data: data,
    contentType: type
  });
}


$.delete = function(url, data, callback, type) {

  if ($.isFunction(data)) {
    type = type || callback,
      callback = data,
      data = {}
  }

  return $.ajax({
    url: url,
    type: 'DELETE',
    success: callback,
    data: data,
    contentType: type
  });
}