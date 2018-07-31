$(onHtmlLoaded); 

function onHtmlLoaded(){
  console.log("DOM loaded");
  
    function displaySpinner () {
    var spinner = $("#loader");
    spinner.css("visibility", "visible");
    spinner.css("border", "16px solid #f2f2f2");
    spinner.css("border-top","16px solid #cc0000");
    spinner.css("border-radius", "50%");
    spinner.css("width", "120px");
    spinner.css("height", "120px");
    
    spinner.css("-webkit-animation", "spin 2s linear infinite");
    spinner.css("-moz-animation", "spin 2s linear infinite");
    spinner.css("-ms-animation", "spin 2s linear infinite");
    spinner.css("-o-animation", "spin 2s linear infinite");
    spinner.css("animation", "spin 2s linear infinite");
  }

  
  
  function removeSpinner(){
    var spinner = $("#loader");
    spinner.css("visibility", "hidden");
//     alert("Your data is loaded");
    var content = $("#cont");
    content.text("Your data is loaded!");

  }
//   removeSpinner();
  
  var asyncMock = function(){
    displaySpinner();
    setTimeout(removeSpinner, 2000);
  }
  
//   asyncMock();
  
  
  $("#btn").on("click", asyncMock)
  
  

 
//   $("#btn").on("click", function(){
//     $("img").css("visibility", "visible")
//   })
  
   
 // PROMISE
  
  $("#button").on("click", getPost);
  
  function getPost(){
    
    var ajaxPromise = $.ajax({
     url: "https://jsonplaceholder.typicode.com/posts",
     method: "GET"
   })
    
//   .then(function(response){
//      console.log("Response", response);
//      })
    
    ajaxPromise.then(function(result){
      console.log("result", result);
      var firstResult = result[0];
      console.log("firstResult", firstResult);
   
   });
    ajaxPromise.then(function(result){
      var secondResult = result[1];
      console.log("secondResult", secondResult);
    })
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}