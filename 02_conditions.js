//Larger of two numbers

const prompt=require("prompt-sync")();
console.log("Finding the largest of the two numbers");
let number1 = prompt("Enter first number  : ");
let number2 = prompt("Enter second number : ");

if(number1 > number2){
    console.log(`Largest number is ${number1}`);
}else{
    console.log(`Largest number is ${number2}`);
}