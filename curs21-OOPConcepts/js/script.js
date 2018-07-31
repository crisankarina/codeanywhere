//INHERITANCE
// define the PARENT / SUPERCLASS
function Animal(options){
  options = options || {}; //this is used to avoid errors when calling new Animal with no parameter object
                          // e.g., var AnimalObj = new Animal();
  this.name = options.name;
  this.color = options.color;
  this.weight = options.weight;
  this.legs = options.legs;
  this.tail = options.tail;
}

Animal.prototype.eat = function (){
  console.log("Nom nom, animal is eating!");
}
  
Animal.prototype.speak = function(){
  console.log("Hello, animal is speaking!");
}  
  
var animalObj = new Animal({
  name: "Papagal",
  color: "Purple"
});
console.log("Animal Object:", animalObj);


//define the CHILD CLASS / SUBCLASS

function Dog(options){
  //next line is used to inherite all properties from parent class (se in mostenesc doar prop cu .CALL)
  Animal.call(this, {legs: 4, tail: true}); //asa toti cateii vor avea 4 picioare 
  //this reprezinta obiectul pe care il creem aici
  this.breed = options.breed;
  //we can add any properties to a dog
  
  //composition relationship : HAS-A
  this.owner = new Owner({
    name: options.ownerName,
    age: options.ownerAge
  });
}
// console.log("nero can't speaK yet", nero.speak());

//To iherite METHOD AND PROPERTIES
// the next line is used to inherite all methods from parent class
Dog.prototype = Object.create(Animal.prototype); // prototipului caine ii dam prototipului animal cu ajutorul object.create

var nero = new Dog({name: "Nero"}); //nero este obiect
nero.name = "Nero";
nero.color = "White";
console.log("nero", nero);

console.log("nero can speak now")
nero.speak(); //return Animal is speaking


//Method Overwriting (SUPRASCRIERE)
Dog.prototype.speak = function(){
  console.log("Bark Bark!");
}
nero.speak(); //return Bark Bark
nero.eat(); // return nom nom animal is eating
animalObj.speak(); //return Animal is speaking


Dog.prototype.run = function(){
  console.log("Nero is running!");
}
nero.run(); //return Nero is running
// animalObj.run(); // return run is not a function ERROR


//COMPOSITION - HAS A
// define Owner Class
function Owner(options){
  options = options || {};
  this.name = options.name;
  this.age = options.age;
}

var rex = new Dog({
  ownerName: "Rex",
  ownerAge: 21
});
console.log("REX", rex);
console.log("Rex's owner name", rex.owner.name);

//POLYMORPHISM
  
function Cat(options){
  Animal.call(this, {legs: 4});
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.speak = function(){
  console.log("Pisi m-ai dezamagit - ANA 2016");
}

var pisi = new Cat();
pisi.name = "Pisi";


console.log("--------Polymorphism--------");
var animalsArray = [pisi, rex, animalObj, nero];
for (var i = 0; i < animalsArray.length; i++){
  var animal = animalsArray[i] //asa luam animalul
  animal.speak();
}

//CURS NOU

console.log("SATATIC PROPERTIES AND METHODS");

console.log("Dog.breed", Dog.breed); //UNDEFINED
var puffy = new Dog({name:"Puffy", breed:"Bichon"});
console.log("Puffy's breed is", puffy.breed);

//Declaram o proprietate statica pe CLASA
Dog.HAS_PAWS = true;
console.log("Dog has paws?", Dog.HAS_PAWS); //true
console.log(puffy.HAS_PAWS); //UNDEFINED PT CA PUFFY ESTE O INSTANTA A CLASEI DOG

//Declaram o metoda statica pe CLASA
Dog.SIT = function(){
  console.log("Sitting down from a static method");
}

Dog.SIT(); //Sitting down from a static method
// puffy.SIT(); //puffy.SIT is not a function pt ca metoda exista pe CLASA si NU pe INSTANTA


// OBJECT CREATION

console.log("Objects creation methods");

var a = { x: 2 };
var b = { x: 2 };
console.log("a === b", a === b); // false
// a si b sunt 2 obiecte diferite care se intampla sa aiba aceeasi valoare

var n = 2;
var m = 2;
console.log("n === m", n === m); // true
// n si m sunt egale pt ca sunt primitive

var c = a;
console.log("a === c", a === c, a, c); //true

a.x = 7;
console.log("a, b, c", a, b, c); // 7, 2, 7


//OBJECT CREATE
var kitty = Object.create(Cat.prototype);
console.log("Kitty", kitty);
kitty.speak();
kitty.name = "Kitty";



















  