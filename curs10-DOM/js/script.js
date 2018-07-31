//exista 2 mari obiecte
// 1. window - browserul, ce permite javas sa accesez info din browser
// 2. document - DOM - structura html pe care o am eu definita si este definit ca un obiect de catre js

// Get element by Id
console.log("Comments list", document.getElementById("comments-list"));


 window.addEventListener("load", function(event) {
 console.log("All resources finished loading!");
 }); // necesar la de fiecare data pt a se incarca lucurile toate onload recomandat cel cu DOM


// when document obj is available
 document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  // by Id
  console.log("Comments list", document.getElementById("comments-list"));
  // by Class
  console.log("Comments items", document.getElementsByClassName("comment-item"));
  // first by class
   console.log("First comment", document.getElementsByClassName("comment-item")[0]);
  // by tag Name
  console.log("Comments items", document.getElementsByTagName("section"));
  // second by tag
  console.log("Second comment", document.getElementsByTagName("section")[1]);
  // by class and tag
  console.log("Query selector", document.querySelector("section.comment-item"));
  // all by class and tag
  console.log("Query selector All", document.querySelectorAll("section.comment-item"));
  // all users
  console.log("Users for comments", document.querySelectorAll("section.comment-item strong"));

  
// Change h1 content
  var h1 = document.querySelector("h1");
  h1.innerText = "JS DOM MANIPULATION NEW"; // as string
  console.log("H1 text", h1.innerText);
  h1.innerHTML = "JS DOM MANIPULATION <em> NEW </em>"; // as HTML
  console.log("H1 HTML", h1.innerHTML);
  
  // Manipulate attribute
  var h2 = document.querySelector("h2");
  h2.setAttribute("title", "Comments list"); // set attribute
  console.log("Get attribute", h2.getAttribute("title"));
  
  h2.id = "comment-list-id"; // set attribute by id
  console.log("Comments-list-id", h2.id);
  
  
  // Change style
  var commentsContainer = document.getElementById("comments-list");
  commentsContainer.style.border = "solid 5px pink";
  
  var commentsItems = document.getElementsByClassName("comment-item");
  for (var i = 0; i < commentsItems.length; i ++) {  //Parcurge un array
    commentsItems[i].style.border = "solid 2px red";
  }

  
  // Add new DOM elements - ne gandim ce elem vrem sa adaugam, identificam in HTML structura
  var commentItem = document.createElement("section"); // Section e aici tipul de element pe care vrem sa il creem
  commentItem.className = "comment-item";
  commentItem.innerHTML = "<h3>New Comment</h3>" + 
                          "<p>New comment content <strong>Author</strong></p>";
  commentsContainer.appendChild(commentItem); // pt a adauga la un parinte  
  
  
  // Remove first comment Item
  var commentItem = document.querySelector("section.comment-item");
  commentsContainer.removeChild(commentItem);
  
  
  // Add comments list
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
  
  for (var j = 0; j < list.length; j++) {
    var comment = list[j];
    var item = document.createElement("section");
    item.className = "comment-item";
    item.innerHTML = "<h3>" + comment.title + "</h3>" +
                     "<p>" + comment.body + "<strong>" + comment.author + "</strong></p>";
       
    
    commentsContainer.appendChild(item);
    
  }
  
  var btnSearch = document.getElementById("btn-search");
  btnSearch.addEventListener("click", onSearch); //onSearch si onSearch1 se executa deodata
  btnSearch.addEventListener("click", onSearch1);
  btnSearch.addEventListener("mouseover", onHover);
 
  function onSearch() {
    alert(1);
  }
  function onSearch1() {
    alert(2);
  }
   function onHover() {
    alert(3);
  }
  
  btnSearch.removeEventListener("mouseover", onHover); // trebuie sa se specifice care functie este eliminata
  
  
  
  
  
  
  
  
  
  
  
}
