//Multiplication table for any number

const prompt=require("prompt-sync")();
let number = prompt("Enter the number for which you want the multiplication table ");

for(let i=1;i<=10;i++){
    console.log(`${number} * ${i} = ${number*i}`);
}