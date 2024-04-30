//Checks whether a number is positive, negative or zero

const prompt = require("prompt-sync")();
let number = prompt("Enter a number to check whether it is positive, negative or zero : ");

(number == 0) ? console.log("Number is Zero"): (number > 0 ? console.log("Number is Positive") : console.log("Number is Negative"));

