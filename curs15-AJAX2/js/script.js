$(domLoaded);

   function domLoaded(){
      console.log("Dom Loaded")
    
    var getShowsData = function (dynamicValue) {
      $.ajax({
        url: `http://api.tvmaze.com/search/shows?q=` + dynamicValue ,
        method: 'GET',
        success: manageData   
      })
    }
    
    
     $("#invoke-ajax-test-call").on("click", function() {
     var query = $("input").val();
     getShowsData(query); // query e argument, nu parametru asa se comunica intre functii si val din query o sa fie folosita in fct de get showsData de mai sus
  }) 
    
     
    function manageData (data, textStatus, jqXHR) {
      $(".container").html(renderHtml(data)); 
    }
    
    function renderHtml (data) {
      var html = `<ul>`
       for (i = 0; i < data.length; i++) {
         var name = data[i].show.name;
         var score = data[i].score;
         var url = data[i].show.url;
         html += `<li>` + name + ` ` + score + ` ` + `<a href="` + url + `" target = "_blank"> ` + url + `</a>` + `</li>`
           console.log("Scorul:", data[i].score);
           console.log("Url:", data[i].show.url);
  
         }
                  
     html += `</ul>`
     return html; 
    }  
     
     
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
  }