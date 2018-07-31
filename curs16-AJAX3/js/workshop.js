$(onHtmlLoaded);

function onHtmlLoaded(){
  
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  
  // Get Post list
  titleGet();
  
  $("#deletePost").on("click", deletePost);
                      
    function deletePost(){
      var id = $("[name = delete]").val();
      $.ajax({
        url: apiUrl + id,
        method: "DELETE",
        success: function(){
          alert("Post with id " + id + " deleted");
        }
      });
  }

  
  function titleGet() {
    var listContainer = $("#listPosts");
    $.ajax({
      url: apiUrl,
      success: function(response){
//         console.log("Title = ", response);
        for (var i = 0; i < response.length; i++){
//           console.log(response[i].title);
          var title = "<h3>" + response[i].title +"</h3>";
          listContainer.append(title);
        }
      }
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}                              
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
