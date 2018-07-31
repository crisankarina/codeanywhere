function myFirstFunction() {
  console.log("My first JS Function");
}

// Call function
myFirstFunction();

function myFirstFunctionReturn() {
  return "My first JS Function return"; //pentru a returna mesajul
}

var message = myFirstFunctionReturn();
document.write(message);
document.writeln("<strong>" + message + "</strong>");


// Piramida de stele
function displayStars() {
  var line = "";
  for (var i = 0; i < 4; i++) {
   line += "*";
   console.log(line);
  }
}
displayStars();


// Functions with parameters
function displayStars1(nr) {
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += "*";
   console.log(line);
  }
}

displayStars1(4);
displayStars1(2);
displayStars1(9);


// Function with default value for parameters
function displayStars2(nr = 4) {
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += "*";
   console.log(line);
  }
}
// Cele goale vor avea valoarea default 4 si cea cu 2 va avea 2
displayStars2();
displayStars2();
displayStars2();
displayStars2(2);


// Am modificat si caracterul
function displayStars3(nr = 4, char = "*") { // se respecta ordinea parametrilor si trebuie definite toate valorie chiar daca nu se schimba
  var line = "";
  for (var i = 0; i < nr; i++) {
   line += char;
   console.log(line);
  }
}
displayStars3();
displayStars3();
displayStars3(4, "%");
displayStars3(8,"-");


var fname = "Ana";
var lname = "Pop";

function displayName(fname, lname) {
  console.log(fname + " " + lname);
  fname = "Ion";
  console.log("Inside function fname", fname);  // Ion
} 
displayName(fname, lname);
console.log("Outside function fname", fname); // Ana



function displayNameObject(person) {
  console.log(person.fname + " " + person.lname);
  person.fname = "Ion";
  console.log("Inside function fname", person.fname);  // Ion
} 
var person = {fname: "Ana", lname: "Pop"}
displayNameObject(person);
console.log("Outside function fname", person.fname); // Ion


// Statement function
function statementFunction() {
  console.log("Statement Function");
}
statementFunction();


//  Expression Function la fel ca cea de sus doar ca fct e intr-o variabila, acestea se pot autoexecuta
var expFunction = function(){
  console.log("Expression Function");
}
expFunction();



// IIFE self invoking function
(function() {
  console.log("IIFE self invoking function"); //IIFE = IMIDIATLY INVOKED FUNCTION EXPRESSION
})(); // se pune fct intre () apoi ca sa se autoapeleze se mai pun ();


// Function with function as parameter
function testFunction() {
  alert("Exec from another function");
}

function execOtherFunction(testFunction) {
  testFunction();
}
execOtherFunction(testFunction);


// Variables Scope
var a = 1; // variabila globala - pe window adica pe browser
b = 2; // vaiabila globala
window.c = 3; //variabila globala

function displayVariables() {
  var d = 4; // variabila locala - nu pot accesa variabila d inafara fct
  e = 5; // variabila globala - de aceea putem sa o vedem inafara fct
  console.log("Inside Variabila d =", d);
  console.log("Inside Variabila e =", e);
}
displayVariables();
console.log("Outside Variabila e =", e);
// console.log("Outside Variabila d =", d);


// Closure
var x = 1; // Global
function firstF() {       // avem acces la cele definite in GLOBAL si in fct asta
  var y = 2; // Local firstF
  
  secondF();
  
  function secondF() {     // avem acces la cele definite in GLOBAL, firstF(parintele) si in fct asta
    var z = 3; // Local secondF
    
    w = 4; // e GLOBALA
    
    console.log("second x =", x); // 1
    console.log("second y =", y); // 2
    console.log("second z =", z); // 3
  }
  
  console.log("first x =", x); // 1
  console.log("first y =", y); // 2
//   console.log("second z =", z); // undifined
}

firstF();
console.log("x =", x); // 1
// console.log("y =", y); // undefined pt ca e definit in firstF
// console.log("z =", z); // undifined
console.log("w =", w); // 4

















