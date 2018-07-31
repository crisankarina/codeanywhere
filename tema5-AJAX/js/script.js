$(domLoaded);

function domLoaded() {


  var response = function(response) {
    console.log("r", response);
    var title = "<h3>" + response.lyrics + "</h3>";
    $("#container").html(title);
  }


  var getLyrics = function(artist, song) {
    $.ajax({
      url: "https://api.lyrics.ovh/v1/" + artist + "/" + song,
      method: "GET",
      success: response
    })
  }



  $("#btn").on("click", function() {
    console.log('btn click')
    var art = $("#artist").val();
    var sng = $("#song").val();
    getLyrics(art, sng);
  })

  //DOG PHOTO


  var getPhoto = function() {
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      method: "GET",
      success: function(resp) {
        var photo = `<img src = "` + resp.message + `">`
        $("#container").html(photo);
      }
    })
  }
  $("#pht").on("click", getPhoto);


  var getData = function() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/",
      method: "GET",
      success: function(response) {
        var content = `<ul>`
        for (var i = 0; i < response.length; i++) {
          content += `<li>` + response[i].title + `</li>`
        }
        content += `</ul>`
        $("#container").html(content);
      }
    })
  }

  $("#post").on("click", getData);








}