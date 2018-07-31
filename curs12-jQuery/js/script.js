// asteptam sa se incarce DOM
$(onHtmlLoaded);

function onHtmlLoaded(){
  console.log("On HTML Loaded");
  
  //by Id
  console.log("Comment list", $("#comments-list"));
  
  //by Id - native DOM element
  console.log("Comment list", $("#comments-list")[0]);
  
  //by class
  console.log("Item", $(".comment-item"));
  
  //by tag
  console.log("Header", $("h1"));
  
  //by query Selector
  console.log("Author", $("section.comment-item strong"));
  
  //Modify content
  var h1 = $("h1");
  h1.text("JQuery DOM Manipulation New");
  h1.html("JQuery DOM Manipulation <em>New</em>");
  
  //Set Attribute
  var h2 = $("h2");
  h2.attr("title", "Comments-list");
  
  //Get Attribute
  console.log("H2 Title", h2.attr("title")); //doar prima valoare, atributul
  
  //Stilizare
  var commentsContainer = $("#comments-list");
  commentsContainer.css("border", "solid 5px coral");
  commentsContainer.css({
    color: "magenta",
    background: "lightgray"
  });
  console.log("Comments list border", commentsContainer.css("border")); // pt a recupera o valoare
  
  // Add border to each comment
  var commentItems = $(".comment-item")
  $(".comment-item").css("border", "solid 2px pink");
  
  // Add new comment
  var comment = "<section>" + 
                "<h3>New Comment</h3>" +
                "<p>Content <strong>Author</strong></p>" + 
                "</section>";
  commentsContainer.append(comment);
 
   var list = [
    {
      title: "Title 1",
      body: "Lorem ipsum... ",
      author: "Ion Pop"
    },
    {
      title: "Title 2",
      body: "Lorem ipsum... ",
      author: "Ana Pop"
    }
    
  ];
  
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var comment = "<section>" + 
                "<h3>" + item.title + "</h3>" +
                "<p>" + item.title + "<strong>" + item.author + "</strong></p>" + 
                "</section>";
    commentsContainer.append(comment);
  }
  
  // Remove element
  commentItems.first().remove();
  
  // Bind events
  var btnSearch = $("#btn-search");
  btnSearch.on("click", function() {
   // alert("You clicked!");
    
   //Get search value
    var search = $('input[name = "search"]').val();
    console.log("Search value = ", search);
//     $("search").css("display", "none");
    
    
    
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}