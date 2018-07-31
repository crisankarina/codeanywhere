//HOISTING

function test() {
  console.log(str); //Undefined pt ca str e declarata sus dar nu ii este asignata nici o valoare

  for (var i = 1; i < 11; i++) {
    var str = "Something " + i;
    console.log("String", str);
  }
}
test();
// console.log(str); //ERROR str is not defined 


//!!!!!!!!!!!!! INTERVIU
// myFunction();
// var myFunction = function (){
//   console.log("myFunction");
// } //ERROR myFunction is not a function pt ca var myFunction se muta mai sus da asignarea ramane jos si atunci nu stie ca ii o functie 
// //UNDER THE HOOD
// var myFunction;
// myFunction();
// myFunction = function(){
//   console.log("myFunction")
// }

const myNumber = 2;
// myNumber = 7; // ERROR Assignment to constant variable.

const user = {
  name: "Karina",
  age: 21
}

// user = {
//   name: "Nuti",
//   age: 65
// } // ERROR Assignment to constant variable. Nu putem reasigna o valoare unei varabile CONST

user.name = "Nuti Tuti";
console.log("Batranul si noul Nuti", user);
user.sex = "Masculin"
console.log("Sexosul, batranul si noul Nuti", user);






