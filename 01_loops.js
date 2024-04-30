//Multiplication table

console.log("Multiplication Table");

const prompt = require("prompt-sync")();
let number = prompt("Enter a number for which you want multiplication table : ");

for(let i=1; i<=10; i++){
    console.log(`${number}  *  ${i}   =  ${number*i}`);
}