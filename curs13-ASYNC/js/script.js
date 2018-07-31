// JS Hoisting
var x = 2;

// var result0 = suma(x, 4); // apelez o var care nu este in memorie
// var result1 = sum(x, 4); // sum is not a function 
// console.log("Sum Function", suma);
// console.log("Result_0", result0);
// console.log("Result_1", result1);

var sum = function (a, b){
  return a + b;
}

var result2;

// Event Loop
// oridinea in care intra codul este de sus in jos, ordinea care iese este, iese cel care e mai rapid

console.log("Before Set Timeout"); // se executa ultimul pentur ca are delay de 3000 ms
setTimeout(function() {
  console.log("Inside"); 
  result2 = sum(x, 3);
}, 3000);

console.log("After Set Timeout");
console.log("Result_2", result2);
























