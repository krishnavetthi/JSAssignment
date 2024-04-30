//Traffic lights

const prompt=require("prompt-sync")();
let signal = prompt("Traffic signal colors- Red, Orange, Green. Enter the signal color:");

if(signal == "Red" || signal=="red"){
    console.log("Vehicles must stop.");
}else if(signal == "Orange" || signal=="orange"){
    console.log("Vehicles must wait, the signal is changing to Red or Green.");
}else if(signal == "Green" || signal=="green"){
    console.log("Vehicles must proceed with caution.");
}else{
    console.log("Invalid signal.")
}