// EXERCITIUL 1
function exercitiul1() {
  // @comment - use var to declare var i inside for
  for (i = 1; i <= 20; i++) {
    console.log(i);
  }
}


// EXERCITIUL 2 VARIANTA 1
function exercitiul2varianta1() {
  for (i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
      console.log("The odd numbers are:", i);
    }
  }
}


//EXERCITIUL 2 VARIANTA 2
function exercitiul2varianta2() {
  var x = [];
  var min = prompt("Introduce-ti limita minima");
  var max = prompt("Introduce-ti limita maxima");
  if (Number.isInteger(parseInt(min)) && Number.isInteger(parseInt(max))) {
    for (i = min; i  <= max; i++) {
      if (i % 2 == 1) {
        x.push(i);
      }
    }
    console.log("The odd numbers are:", x.toString());
  } else {
    alert ("Valorile introduse nu sunt corecte!");
  }
}

// EXERCITIUL 3 VARIANTA 1
function exercitiul3varianta1() {
  var sum = 0; var x = [];
  var nrElemente = prompt("Introduce-ti nr de elemente din sir");
  console.log("Numarul de elemente introduse este: ", nrElemente);
  if (Number.isInteger(parseInt(nrElemente)))  {
    for (i = 1; i <= nrElemente; i++) {
      var aux = prompt("Introduce-ti numarul " + i +":" );
      if (Number.isInteger(parseInt(aux))) {
        x.push(parseInt(aux));
      } else {
        alert ("Valoarea introdusa nu este un numar pozitv. Iesim din program.");
        break;
      }
    }
  } else {
    alert ("Valoarea introdusa nu este un numar pozitiv");
  }
  i --;
  if (i == nrElemente) {
    for (i = 0; i < x.length; i ++) {
      sum = sum + x[i];
    }
    console.log("Suma numerelor este: " + sum);
    alert ("Suma numerelor este: " + sum);
  }
}

// EXERCITIUL 3 VARIANTA 2
function exercitiul3varianta2() {
  var sum = 0;
  var sirElemente = prompt("Introduce-ti elementele (ex: a+b+c)"); 
  var x = sirElemente.split("+");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    if (Number.isInteger(parseInt(x[i]))) {
      sum = sum + parseInt(x[i]);
    } else {
      alert ("Sirul introdus este incorect!");
      break;
    }
  }
   if (i == x.length) {
    console.log("Suma numerelor este: " + sum);
    alert ("Suma numerelor este: " + sum);
  }
}


// EXERCITIUL 4
function exercitiul4() { 
  var max = NaN; // @comment - max should take the first value from array and start from second the parse. No need for an extra value
  var sirElemente = prompt("Introduce-ti elementele (ex: a,b,c)"); 
  var x = sirElemente.split(",");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    if (Number.isInteger(parseInt(x[i]))) {
      // @comment - to complex, simplify
      if (isNaN(max)) {
         max = x[i];
       }
       if (max > 0 &&  x[i] > 0 && max < x[i]) {
         max = x[i];
       } else if (max < 0 && max > x[i]){
         max = x[i];
       }
    } else {
      alert ("Sirul introdus este incorect!");
      break;
    }
  }
   if (i == x.length) {
    console.log("Maximul este: " + max);
    alert ("Maximul este: " + max);
  }
}


// EXERCITIUL 5
function exercitiul5() {
  var nrAparitii = 0;
  var sirElemente = prompt("Introduce-ti elementele (ex: a b c)");
  var elementCautat = prompt("Introduce-ti elementul cautat:");
  var x = sirElemente.split(" ");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    // @comment - use ===
      if (x[i] == elementCautat) {
        nrAparitii++;
      }
   }
    console.log("Numatur de aparitii pentru elementul "+ elementCautat + " este " + nrAparitii);
    alert ("Numatur de aparitii pentru elementul " + elementCautat + " este: " + nrAparitii);
}

//Hands on - cerinta temei mi s-a parut abstracta asa ca am facut ceea ce am inteles eu ca trebuie

var janeDoe = {
  sex: "M",
  BMI: 24, 
  weight: "Normal"
};
console.log("JaneDoe is: ", janeDoe);

var maryAnne = {
  sex: "F",
  BMI: 30,
  weight: "Obese"
};
console.log("Mary Anne is:", maryAnne);

function workshop() {
  var x = prompt("Enter weight in KG"); //weight
  var y = prompt("Enter height in m"); //height
  
  if (Number.isInteger(parseFloat(x)) && Number.isInteger(parseFloat(y))) {
    if (parseFloat(x) > 0 && parseFloat(y) > 0) {
     var z = parseFloat(x) * 1000; //transform kg in g
     var bmi =  parseFloat(z / (y * y)); 
    if (bmi < 18.5) {
      alert("You are within underweight range");
  } else if (bmi <= 25) {
     alert("You are within normal");
  } else if (bmi <= 30) {
      alert("You are within overweight range");
  } else {
      alert("You are within the obese range");
  }   
  } else {
     alert("Nu ati introdus numere!")
  }
 
  }
}
  
  
  




