//Positive even numbers till number specified

console.log("Prints all positive even numbers till number specified");

const prompt = require("prompt-sync")();
let number = prompt("Enter the number : ");

for(let i = 1; i<number; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
