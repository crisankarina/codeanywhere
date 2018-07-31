// 1
console.log("Number", 4);
console.log("String", "Karina");
var nr = 5;
console.log("Number", nr);
var string = "DADADA";
console.log("String", string);
var isTrue = true;
var isFalse = false;
console.log("True", isTrue);
console.log("False", isFalse);
var isNull = null;
console.log("null", isNull);
var isUndifined;
console.log("This is not defined", isUndifined);

var a = 10;
var b = 2;
console.log("Sum =", a + b);
console.log("Compare", 2 < 0); //false
console.log("Compare", a > b); //true

var fname = "KARINA";
var lname = "CRISAN";
var fullname = fname + " " + lname; //concatenare
console.log("Full name is ", fullname);

var a = [];
console.log("Empty array", a);
var a = ["Hey", "There"];
console.log(a.length);
a.push("Gheorge");
a.push(50);
a.push([29]);
console.log(a.length);
console.log(a [4]); // returneaza un array de [29]
console.log(a [4][0]); //returneaza valoarea 29


var mix = [1, 'two', ['apple', 'orange']];
console.log(mix[2]);
console.log(mix[0]); 
mix[2] = 3;
mix[3] = [1, 2, 3];
console.log(mix);

// 2 

var robot = {};
console.log("Robot is empty", robot);
var robot = {
  model: "TRX100",
  weight: 180
}
console.log("Robot has model and weight", robot);

robot.color = "pink";
console.log("Robot now has color", robot);

robot.weight = 10000;
console.log("Robot has update weight", robot); // se suprascrie

delete robot.weight;
console.log("Robot does not have weight anymore", robot);

var robot = {
  model: "TRX100",
  color: "pink",
  run: function() {
    console.log("Robot is running!");
  }
}
console.log("Robot now has a method", robot);

robot.run();

var name = "Facultate";
console.log("Type of", typeof name); //STRING

// 3
function myFirstFunction () {
  console.log("My First Function");
}
myFirstFunction();

function statementFunction () {
  console.log("Statement Function");
}
statementFunction();

var expFunction = function() {
  console.log("Expression Function");
}
expFunction();

(function (){
  console.log("IIFE self invoking funciton");
})();


function stars1(nr){
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += "*";
   console.log(line);
  }
} 

stars1(4);
stars1(6);
stars1(8);

function stars2(nr = 4){
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += "*";
   console.log(line);
  }
} 

stars2(); // apar 4
stars2(5); //apar 5

function stars3(nr = 3, char = "*"){
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += char;
   console.log(line);
  }
} 

stars3(3,"%");
stars3(5);
stars3(2,"-");

fname = "Ana";
lname = "Gageanu";
function displayName(fname, lname) {
  console.log(fname + " " + lname);
  lname = "Param";
}
displayName(fname, lname);
console.log("Inafara functiei", displayName);


function fFunction (){
  console.log("First function");
}
function sFunction(fFunction) {
  fFunction();
}
sFunction(fFunction);

// Global
var a = 1; 
b = 2;
window.c = 3;

// Local
function local() {
  var d = 4;
  e = 5;
}
local();

document.addEventListener("DOMContentLoaded", onHtmlLoaded);
function onHtmlLoaded() {
  console.log("DOM if fully parsed and ready to be modified!");
  
  document.getElementById("comments-list");
  console.log("Comment list:", document.getElementsByClassName("comment-list"));
  console.log("Second comment from list:", document.getElementsByClassName("comment-list")[1]);
  console.log("First comment", document.getElementsByClassName("comment-item")[0]);
  console.log("by tag name", document.getElementsByTagName("p"));
  console.log("Second by tag name", document.getElementsByTagName("section")[1]);
  console.log("Returns the first one - by query selector", document.querySelector("p"));
  console.log("by query", document.querySelector("section p strong"));
  console.log("Query selector all", document.querySelectorAll("h3"));
  
  
  var h1 = document.querySelector("h1");
  h1.innerText = "JS DOM MANIPULATION NEW"; // as string
  console.log("H1 text", h1.innerText);
  h1.innerHTML = "This is a <em>new</em> h1";
  console.log("H1 html", h1.innerHTML);
  
  var h2 = document.querySelector("h2");
  h2.setAttribute("title","Comment");
  console.log("new attribute", h2.getAttribute("title"));
  
  
  document.querySelector("h2").style.border = "solid 2px black";
  var commentItems = document.getElementsByClassName("comment-item");
  for (var i = 0; i < commentItems.length; i ++) {
    commentItems[i].style.border = "solid 3px pink";
  }
  var commentsContainer = document.getElementById("comments-list");
  commentsContainer.style.border = "solid 5px pink";
  
  var comment1 = document.createElement("section");
  comment1.className = "comment-item";
  comment1.innerHTML = "<h3>New Comment</h3>" + 
                      "<p>Comment 3 content <strong>Author</strong></p>";
  comment1.style.border = "solid 4px green";
  commentsContainer.appendChild(comment1);
  
  var comment2 = document.createElement("section");
  comment2.className = "comment-item";
  comment2.innerHTML = "<h3>New Comment</h3>" + 
                       "<p>Commetn3 content <strong>Author</strong></p>";
  comment2.style.border = "solid 4px blue";
  commentsContainer.appendChild(comment2);
  
  commentsContainer.removeChild(comment2);

  var arr = [
    {
      title: "Title1",
      body: "Text1",
      author: "Name1"
    },
    {
      title: "Title2",
      body: "Text2",
      author: "Name2"
    }
  ];
  
  for (var j = 0; j < arr.length; j ++) {
    var comm = arr[j];
    var item = document.createElement("section");
    item.className = "comment-item";
    item.innerHTML = "<h3>" + comm.title + "</h3>"
                     "<p>" + comm.body + "<strong>" + comm.author + "</strong></p>";
    item.style.border = "solid 4px red";
    commentsContainer.appendChild(item);  
  }
  
  var search = document.getElementById("btn-search");
  search.addEventListener("click", onSearch);
  search.addEventListener("click", onSearch1);
  search.addEventListener("click", onSearch2);
//   search.addEventListener("mouseover", onMouse);
  
  function onSearch() {
    alert(1);
  }
 function onSearch1() {
    alert(2);
  }
  function onSearch2() {
    alert(10);
  }
  
//   function onMouse(){
//     alert("mouse over");
//   }
  
  search.removeEventListener("click", onSearch1);
  
  
  
  
  
  
  
  
  
  
  
  
}










