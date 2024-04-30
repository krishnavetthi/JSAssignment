//Days Until Weekend

const prompt = require("prompt-sync")();
console.log("Enter the today's day name, you will get to know how many more days till the weekend :");
let day = prompt("");

switch(day){
    case "Monday":
    case "monday": console.log("There are (5) days until weekend"); break;
    case "Tuesday":
    case "tuesday": console.log("There are (4) days until weekend"); break;
    case "wednesday":
    case "Wednesday": console.log("There are (3) days until weekend"); break;
    case "thursday":
    case "Thursday": console.log("There are (2) days until weekend"); break;
    case "friday":
    case "Friday": console.log("There are (1) days until weekend"); break;
    case "Saturday":
    case "saturday":
    case "sunday":
    case "Sunday": console.log("There are (0) days until weekend"); break;
    default: console.log("Invali day name"); break;
}