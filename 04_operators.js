//Comparision operators

let num = 10, num1 = 10, num01 = "10", num2=12, num3=5;

//Equal
console.log("Equal operator");
console.log(`10==10 : ${num==num1}`);
console.log(`10==12 : ${num==num2}`);
console.log("\n");

//Not equal
console.log("Not Equal operator");
console.log(`10!=10 : ${num!=num1}`);
console.log(`10!=12 : ${num!=num2}`);
console.log("\n");

//Strictly Equal
console.log("Strictly Equal operator");
console.log(`10===10 : ${num===num1}`);
console.log(`10==="10" : ${num===num01}`);
console.log("\n");

//Strictly Not Equal
console.log("Strictly Not Equal operator");
console.log(`10!==10 : ${num!==num1}`);
console.log(`10!=="10" : ${num!==num01}`);
console.log("\n");

//Greater Than
console.log("Greater Than operator");
console.log(`12>10 : ${num2>num1}`);
console.log(`5>12 : ${num3>num2}`);
console.log("\n");

//Greater Than Or Equal to
console.log("Greater Than Or Equal To operator");
console.log(`12>=10 : ${num2>=num1}`);
console.log(`5>=12 : ${num3>=num2}`);
console.log("\n");


//Lesser Than 
console.log("Lesser Than operator");
console.log(`5<12 : ${num3<num2}`);
console.log(`12<10 : ${num2<num1}`);
console.log("\n");

//Lesser Than Or Equal to
console.log("Lesser Than or Equal to operator");
console.log(`5<=12 : ${num3<=num2}`);
console.log(`12<=10 : ${num2<=num1}`);
console.log(`10<=10 : ${num<=num1}`);
console.log("\n");
