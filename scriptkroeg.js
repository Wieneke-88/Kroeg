//INHOUD; GEBRUIK VAN NEGATION- EN LOGICAL OPERATORS 
//  BEGRIJP IK! 

const age = 18;
const isFemale = true;
const driverStatus = "bob";

if (age >= 18) {
    console.log("Je mag naar binnen!");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log("Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

//vergelijking mbv "is gelijk aan-symbool - ===" 
if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

//logical operator: &&-symbool - De waarde moet tussen 18 en 30 vallen voor de if (anders else)
var myAge = 25;

if (myAge >= 18 && myAge <= 30) {
    console.log("You may come!");
} else {
    console.log("Sorry, you can't come!");
}