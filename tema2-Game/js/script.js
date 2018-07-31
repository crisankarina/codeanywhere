var userChoice = Math.random();
var computerChoice = Math.random();
var values = ["rock", "paper", "scissors"];

if(computerChoice <= 0.33) {
  computerChoice = "rock";
} else if(computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

if(userChoice <= 0.33) {
   userChoice = "rock"; 
} else if(userChoice <= 0.66) {
   userChoice = "paper";
} else {
   userChoice = "scissors";
}

var choice1 = userChoice;
var choice2 = computerChoice;
function play(choice1, choice2) {

  if(choice1 === choice2){
	  return ("It is a tie!");
	}
	if(choice1 === "rock") {
		if(choice2 === "scissors") {
			return ("Rock wins!");
		}else {
			return ("Paper wins!");
			}
	}
  if(choice1 === "paper") {
		if(choice2 === "rock") {
			return ("Paper wins!");
		}else {
      return ("Scissors wins!");
			}
	}

  if(choice1 === "scissors") {
		if(choice2 === "rock") {
			return ("Rock wins!");
		} else {
      return ("Scissors wins!");
			}
	}
}


console.log("User choice is: " + choice1);
console.log("Computer choice is: " + choice2);
console.log(play(choice1,choice2));

