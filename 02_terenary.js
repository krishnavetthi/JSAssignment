//Largest of two numbers

console.log("Largest of two numbers");
const prompt = require("prompt-sync")();
let number1 = prompt("Enter first number : ");
let number2 = prompt("Enter second number : ");

(number1 > number2) ? console.log(`${number1} is the largest number`) : console.log(`${number2} is the largest number`);