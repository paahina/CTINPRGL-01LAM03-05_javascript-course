// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");
// //Let
// //let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// //Const
// const birthYear = 19
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// //Var
// var job = "programmer";
// job = "teacher";
// console.log(job);

// //Best Practice is to use const by default

// /*
// const country = "Portugal";
// const language = "Protugueses";
// const population = 10;
// */

// //Use let only when you need to change the value:

// /*
// let age = 20;
// age = 26; this will change
// */

// console.log("=== DATA TYPES ===");

// // Number (integers and decimals)
// //let age = 23;
// console.log(age);
// console.log (typeof age);

// //Stirng (text in quotes)
// //let firstName = "Jonas";
// console.log(firstName);
// console.log(typeof firstName);

// //Boolean (true or false)
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); // "boolean"

// // Undefined (no value assigned yet)
// let year;
// console.log(year);
// console.log(typeof year);

// //JavaScript variables can change types:

// //start as a number
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a string
// dynamicVariable = "Now I'm a string!"
// console.log(dynamicVariable, typeof dynamicVariable);

// //change to a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

console.log('=== MATH OPERATORS ===');
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log('Math operations');
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

//Math with Strings
const firstName = "Page";
const lastName = "Aurellano";
console.log("Concatenations:", firstName + " " + lastName);

console.log("Hello, " + "World" + "!");

//Assigment Operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5;
console.log("x starts as:", x);

x += 10;
console.log("x starts as:", x);

x *= 4;
console.log("x starts as:", x);

x /= 2;
console.log("x starts as:", x);

x++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

// comparison operators
console.log("=== COMPARISON OPERATIONS ===");

console.log("Age Comparison: ");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number Comparison");
console.log(25 > 20);
console.log(15 > 10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;

console.log("Sarah is an adult:",  isFullAge);

console.log("Complex comparison");
console.log(now - 1991 > now - 2018);

let z, y;

z = y = 25 - 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah)/2;
console.log(ageJonas, ageSarah, averageAge);

//Coding Challenge #1 - BMI Calculator
console.log("=== Coding Challenge #1 ===");
const massMark = 78;
const heightMark = 1.69;
const markBMI = massMark / heightMark ** 2;

const massJohn = 92;
const heightJohn = 1.95;
const johnBMI = massJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("Marks BMI:", markBMI);
console.log("John BMI:", johnBMI);
console.log("Is Mark's BMI Higher than John?",markHigherBMI);


