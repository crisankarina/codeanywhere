var personString = '{ "name": "Mihai", "age": 25, "gender":"M" }'// string cu format JASON deoarece are {} 

var person = {
   name: "Ionut", 
   age: 25, 
   gender:"M"
}

var age = 25;

console.log("Nume", person.name);
person.age = person.age + 4;
console.log("New age", person.age);

console.log("TypeOf personString ", typeof personString);
console.log("TypeOf person ", typeof person);
console.log("TypeOf age ", typeof age);

// converted string to object - deserializare
var convertedPersonStringToObject = JSON.parse(personString);
console.log("convertedPersonStringToObject", convertedPersonStringToObject);

// converted object to string  - serializare
var convertedPersonToString = JSON.stringify(person);
console.log("convertedPersonToString", convertedPersonToString);

// console.log("Nume", personString.name); // return undefined
























