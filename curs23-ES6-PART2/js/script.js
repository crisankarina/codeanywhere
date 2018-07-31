const numbers = [5, 7, 4, -2, 8, 9, 13];
let evans = []; //evan numbers from numbers array will be added here

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evans.push(numbers[i]); //adds evans numbers at the end of the evans array
    }
}

console.log("After for", evans);

evans = [];

numbers.forEach(function(currentElement) { //currentElement = numbers[i];
    if (currentElement % 2 === 0) {
        evans.push(currentElement);
    }
});

console.log("After forEach", evans);

evans = [];

numbers.forEach(currentElement => {
    if (currentElement % 2 === 0) {
        evans.push(currentElement);
    }
});

console.log("After forEach with Arrow Function", evans);


//LEXICAL THIS
window.onload = function() {

    const button = document.getElementById("myElement");

    this.clicked = 0; //this is the button

    //   button.addEventListener("click", function() {
    //     console.log("this inside event handler", this); //this ii elementul buton
    //     this.clicked++;
    //     console.log("button clicked " + this.clicked + " times");
    //   });

    const that = this;

    //   button.addEventListener("click", function() {
    //     console.log("this inside event handler", this);
    //     that.clicked++;
    //     console.log("button clicked " + that.clicked + " times");
    //   });


    button.addEventListener("click", () => {
        // same this as in the surrounding scope adica this = 0;
        this.clicked++;
        console.log("button clicked " + this.clicked + " times");
    });


    //CLASSES
    console.log("----- CLASSES -----");

    class Animal {
        //constructor is a special method used for obj creation and initalization
        //only ONE per class
        //this is the one that is called when using NEW
        constructor(options) {
            options = options || {};

            this.name = options.name;
            this.color = options.color;
            this.weight = options.weight;
            this.height = options.height;
            this.legs = options.legs;
        }

        eat() {
            console.log("nom nom, animal is eating");
        }
        speak() {
            console.log("hello, animal is speaking");
        }

        //defined getter method
        get biometricData() {
            return "This animal is " + this.height + " tall and weights " + this.weight;
        }

        //define setter method
        set biometricData(data) {
            //data will have format [height, weight];
            this.height = data[0];
            this.weight = data[1];
        }

        //STATIC METHOD
        static SIT() {
            console.log("STATIC METHOD: Animal is sitting")
        }
    }


    //create Animal instance
    const fulga = new Animal({
        name: "Fulga",
        color: "Purple",
        weight: "200kg",
        height: "1.80m",
        legs: 4
    });

    console.log("Fulga", fulga);
    fulga.eat();
    fulga.speak();

    //use GETTER

    console.log(fulga.biometricData) //este o PROPRIETATE, nu o METODA si este defenita cu get

    //use SETTER
    fulga.biometricData = ["2m", "250kg"]; //este o PROPRIETATE, nu o MEDOTA
    console.log(fulga); //the value assigned should be in the format expected by the setter


    //calling a static method
    //STATIC METHODS are available on the class directly, not on the instances
    Animal.SIT();
    //NOT fulga.SIT();


    //INHERITANCE
    console.log("----- INHERITANCE -----");

    //define child class
    //it extends Animal Super Class/ Parent Class
    class Dog extends Animal {
        //constructor function is optional in child class
        constructor(options) {

            //metoda care cheama constructorul din clasa parinte
            super(options);
            this.legs = 4;
            this.breed = options.breed;
        }


        //method OVERRIDE
        speak() {
            console.log("Ham Ham!");
        }
    }

    const nero = new Dog({
        name: "Nero",
        color: "White and brown",
        height: "50cm",
        weight: "50kg",
        breed: "Ciobanesc German"
    });

    console.log(nero);
    nero.speak(); //HAM HAM
    nero.eat(); //nom, nom, animal is eating


};