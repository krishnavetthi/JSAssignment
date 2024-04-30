//Perimeter of a rectangle

const prompt = require("prompt-sync")();
console.log("This program gives the perimeter of a rectangle:")
let length = prompt("Enter the length of the rectangle: ");
let breadth = prompt("Enter the breadth of the rectangle: "); 

let perimeter = length*breadth;

console.log(`Perimeter of the rectangle of length ${length} and breadth ${breadth} is ${perimeter} `);