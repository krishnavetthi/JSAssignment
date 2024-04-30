// Variables and typeof

// String
let sentence = "Hi, I am Krishna vetthi, I am happy to join Full Stack Web Development Course.";
console.log(typeof sentence," - ",sentence);
console.log("\n");

//Number
let num = 100, 
    flot_num = 19.45,
    inf = Number.POSITIVE_INFINITY,
    inf2 = Number.NEGATIVE_INFINITY,
    nan = NaN;
console.log(typeof num," - ",num);
console.log(typeof flot_num," - ",flot_num);
console.log(typeof inf," - ",inf);
console.log(typeof inf2," - ",inf2);
console.log(typeof nan," - ",nan);
console.log("\n");

//Bigint
const big = 1024n;
console.log(typeof big," - ",big);
console.log("\n");

//Boolean
let val1 = true;
let val2=false;
console.log(typeof val1," - ",val1);
console.log(typeof val2," - ",val2);
console.log("\n");

//Undefined
let a = undefined;
console.log(typeof a," - ",a);
console.log("\n");

//null
let b = null;
console.log(typeof b," - ",b);
console.log("\n");

//symbol
let c = Symbol('Skills');
console.log(typeof c," - ",c);
console.log("\n");

//Object
let array1 = [10, "krishna", 20, 30, 40.8, true, 1024n];
console.log(typeof array1," - ",array1);
console.log("\n");

let object1 = {
    name:"Krishna",
    course:"FSWD",
    duration_days:160,
}

console.log(typeof object1," - ",object1);
console.log("\n");