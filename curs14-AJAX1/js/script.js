// $(document).ready(
//   function(){
//     console.log("DOM IS READY")
// })

 //acelasi lucru cu ce e scris mai sus
$(domLoaded);

   function domLoaded(){
      console.log("Dom Loaded")
    
    //folosim fct ajax pt a chema un request
    var getShowsData = function () {
      $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=girls',
        method: 'GET',
        success: manageData 
//           console.log("TV SHOWS", data);
//           console.log("Number of TV Shows", data.length);
//           console.log("First TV Show", data[0]);
        
      })
    }
    
     $("#invoke-ajax-test-call").on("click", function() {
//     alert ("Am fost apasat!");
    getShowsData();
  }) 
    
     // pe proprietatea succes de la call de ajax se va executa o functie. Aceasta va avea 3 parametrii. Ordinea parametriilor trebuie respectata.
    // Data este un array cu toate obiectele. TextStatus iti zice daca s-au adus cu succes. jqXHR este un obiect pe care il putem accesa

    function manageData (data, textStatus, jqXHR) {
      $(".container").html(renderHtml(data));
     
        
    }
    
    function renderHtml (data) {
      var html = `<ul>`
       for (i = 0; i < data.length; i++) {
//             console.log("Title", data[i].show.name); //accesam datele
         html += `<li>` + data[i].show.name + `</li>`
         }
                  
     html += `</ul>` // += concatenare !!!!
     return html;
    }
     
  }

// am dat parametru query pt ca am atribuit var query val pe care o introduci in input si apoi inlocuim in url, il facem dinamic
    // cu ce introduce persoana in field