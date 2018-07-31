function User(options) {
  options = options || {};
  this.name = options.name;
  this.age = options.age;
  this.weight = options.weight;
  this.height = options.height;
}

User.prototype.calculateBMI = function() {
  return this.weight / (this.height * this.height);
}

var ada = new User({
  name: "Ada",
  age: 28,
  weight: 55,
  height: 1.70
});

console.log("Ada's BMI: ", ada.calculateBMI());

console.log("User's prototype property: ", User.prototype);

console.log("Ada's prototype attribute: ",
            Object.getPrototypeOf(ada));

console.log("They are the same");

console.log(User.prototype.isPrototypeOf(ada));