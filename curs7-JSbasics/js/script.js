// Play with literals (values)
console.log("Number", 12);
console.log("String", 'Karina');


// Play with variables
var age = 21;
console.log("Age =", age);

var name = "Karina";
console.log("Name = ", name);

var isTrue = true;
var isFalse = false;
console.log("isTrue = ", isTrue);
console.log("isFalse = ", isFalse);
console.log("isFalse = ", isFalse, "isTrue = ", isTrue);

var thisIsNull = null;
console.log("thisIsNull = ", thisIsNull);

var thisIsNotDefined;
console.log("thisIsNotDefined = ", thisIsNotDefined);

// Operators
console.log("Sum = ", 2 + 2);

var a = 10;
var b = 4;
var c = a - b;
console.log("Diff = ", c);

console.log("Compare ", 2 > 0);
console.log("Compare ", 2 <= 0);

console.log("Logical && ", 2 > 0 && 0 < 2);
console.log("Logical || ", 2 > 0 || 0 < 2);

var logical = (0 > 2);
console.log("Logical ! ", !logical);

var fname = "Karina";
var lname = "Crisan";
var name = fname + " " + lname;  // concatenare
console.log("Name = " + name);

// Arrays
// Empty array
var a = [];
console.log("a = ", a);

//Array cu valori
var a = ["Anca", "Ion"];
console.log("a = ", a);
console.log("a length = ", a.length);

//Add new value in array
a.push("Gheorghe");
a.push(50);
a.push([10]);

console.log("a = ", a);
console.log("a = ", a [4]); // returneaza un array de [10]
console.log("a = ", a [4] [0]); // returneaza valoarea 10


















