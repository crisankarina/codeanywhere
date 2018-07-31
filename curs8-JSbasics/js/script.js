// Empty Object
var robot = {};
console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100
};
console.log("Robot = ", robot);

// Add new property
robot.color = "red";
console.log("Robot = ", robot);

// Update property
robot.weight = 99;
console.log("Robot = ", robot);

//  Delete property
// delete robot.model;
// console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100,
  run: function () {
    console.log("The robot is running");
  }
};
console.log("Robot = ", robot);

// Call robot method
robot.run();

// Typeof data
var name = "Karina";
console.log("Typeof string", typeof name); //string

var age = 20;
console.log("Typeof string", typeof age); //number

var isNull = null;
console.log("Typeof string", typeof isNull); //object

var isUndifined;
console.log("Typeof string", typeof isUndifined); //undifined

var list = [];
console.log("Typeof array", typeof list); //object


//IF STATEMENT
var x = 10;
if (x > 0) {
  console.log("Positiv number x = ", x);
}

var x = -2;
if (x > 0) {
  console.log("Positiv number x = ", x);
} else {
  console.log("Negative number x = ", x);
} 

var x = 0;
if (x > 0) {
  console.log("Positiv number x = ", x);
} else if (x === 0) {
  console.log("x = ", x);
} else {
  console.log("Negative number x = ", x);
} 


var currentTime = prompt("Enter time");
console.log(currentTime);
if (currentTime < 10) {
  console.log("Buna ziua ");
} else if (currentTime <= 18) {
  console.log("Buna ");
} else {
  console.log("Buna seara");
}


//FOR STATEMENT
for (var i = 0; i <= 10; i++) {
  console.log("Index = ", i);
}

for (var i = 1; i <= 5; i++) {
//   console.log("Line = ", i);
  var line = "";
  for (var j = 1; j <= 5; j++) {
//     console.log("Column = ", j);
    line += (i * j) + " ";
//     var value = i * j;
//     console.log("Value = ", value);

  }
  console.log("LINE", line);
}


















