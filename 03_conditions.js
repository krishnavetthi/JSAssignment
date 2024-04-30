//If number divisible by 3 print Fizz, if divisible by 5 print Buzz, if divisible by both print FizzBuzz

const prompt = require("prompt-sync")();
console.log("This program takes a number as input and if the number is divisible by 3 its prints Fizz, if divisible by 5 prints Buzz, if divisible by both it prints FizzBuzz ");
let number = prompt ("Enter any number : ");

if(number % 3 == 0 && number % 5 == 0){
    console.log("FizzBuzz");
}else if(number % 3 == 0){
    console.log("Fizz");
}else if(number % 5 == 0){
    console.log("Buzz");
}else{
    console.log("Number is not divisible by 3 or 5");
}
