// No properties and no methods
var emptyObject1 = {};
console.log(emptyObject1);

var emptyObject2 = new Object();
console.log(emptyObject2);

var userMe = {
  name: "Karina Crisan",
  age: 21,
  height: 169,
  weight: 58,
  "eyes color": "brown",
  // age: 22 duplicated keys are not possible
  sayHi: function() { //method without parameters
    console.log("Hello world from an object methond!")
  },
  sayHiTo: function(name) { //method with parameters
    console.log("Hello, " + name + "!")
  }
};

// Static accessing object properties
console.log(userMe);
userMe.sayHi();
userMe.sayHiTo("Grupa 5");
console.log(userMe.name); // dot notation
console.log(userMe["eyes color"]); // to acces a propertyIsEnumerable
console.log(userMe["age"]); // brackets notation

// Dynamic accessing object properties
var prop = "height";
console.log("Height", userMe[prop]); // will display height
console.log(userMe.prop); //will display undefined si e echivalent cu userMe["prop"];

prop = "age";
console.log("Age", userMe[prop]) // will display age

//Object Built-In Methods - prezente pe orice obiect
console.log("ALL KEYS:", Object.keys(userMe));
console.log("ALL VALUES ", Object.values(userMe));
console.log("KEYS AND VALUES", Object.entries(userMe));
console.log("ALL KEYS:", Object.keys(userMe)[0]); // returns name

var keys = Object.keys(userMe);
for (var i = 0; i < keys.length; i++){
  var prop = keys[i]
  console.log(prop, userMe[prop]); // returneaza keya si valoarea
}


//CONSTRUCTOR FUNCTION - numele fct trebuie sa fie cu litera MARE
function User(options){
  options = options || {} // in cazul in care nu se pune nume, sa se puna un string gol by default
  this.name = options.name; // this. <- este obiectul
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.calculateBMI = function(){
    return this.height / this.weight;
  }
}

//INSTANTIEM UN OBIECT
var user1 = new User({
  name: "Karina",
  age: 21,
  height: 168,
  weight: 58
})
console.log("User created with constructor function", user1);
console.log("User 1 BMI", user1.calculateBMI());

var user2 = new User({
  name: "Ana",
  age: 21,
  height: 160,
  weight: 54
})
console.log("User created with constructor function", user2);
console.log("User 2 BMI", user2.calculateBMI());

//PROTOTYPE
console.log("User Prototype", User.prototype); // aflam fct din clasa

// user1.sayHi(); da eroare pt ca nu am definit fct

//ADAUGAM FCT UNEI CLASE
User.prototype.sayHi = function(){
  console.log("Hi there, "+ this.name + "!");
}

user1.sayHi(); //Hi there, Karina!
user2.sayHi(); //Hi there, Ana!

console.log("there is no prototype PROPERTY on object", user1.prototype); // return undefined
// ASTFEL ESTE O METODA
console.log("prototype ATRIBUTE", Object.getPrototypeOf(user1),
                                  Object.getPrototypeOf(user2));

console.log("Constructor function is prototype of object", User.prototype.isPrototypeOf(user1),
                                                           User.prototype.isPrototypeOf(user2));


// ESTE DE PREFERAT TOATE METODELE(FCT) SA FIE DEFINITE PE PROTOTYPE SI TOATE VARIABILELE(NAME, AGE) SA LE DEFINIM IN OBIECTE

console.log(user1.toString);
//PROTOTIPUL MECANISME PRIN CARE OBIECTELE MOSTENESC UNUL DE LA CELALALT
// FCT AU PROPOTYPE PROP
// OBIECTELE AU PROTOTYLE ATRTRIBUTE








