// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);

// // // console.log("=== VARIABLES ===");
// // // //Let
// // // //let firstName = "Jonas";
// // // console.log(firstName);

// // // let age = 30;
// // // console.log(age);
// // // age = 50;
// // // console.log(age);

// // // //Const
// // // const birthYear = 19
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // //Var
// // // var job = "programmer";
// // // job = "teacher";
// // // console.log(job);

// // // //Best Practice is to use const by default

// // // /*
// // // const country = "Portugal";
// // // const language = "Protugueses";
// // // const population = 10;
// // // */

// // // //Use let only when you need to change the value:

// // // /*
// // // let age = 20;
// // // age = 26; this will change
// // // */

// // // console.log("=== DATA TYPES ===");

// // // // Number (integers and decimals)
// // // //let age = 23;
// // // console.log(age);
// // // console.log (typeof age);

// // // //Stirng (text in quotes)
// // // //let firstName = "Jonas";
// // // console.log(firstName);
// // // console.log(typeof firstName);

// // // //Boolean (true or false)
// // // let javascriptIsFun = true;
// // // console.log(javascriptIsFun);
// // // console.log(typeof javascriptIsFun); // "boolean"

// // // // Undefined (no value assigned yet)
// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // //JavaScript variables can change types:

// // // //start as a number
// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // //change to a string
// // // dynamicVariable = "Now I'm a string!"
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // //change to a boolean
// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // console.log('=== MATH OPERATORS ===');
// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log('Math operations');
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // //Math with Strings
// // const firstName = "Page";
// // const lastName = "Aurellano";
// // console.log("Concatenations:", firstName + " " + lastName);

// // console.log("Hello, " + "World" + "!");

// // //Assigment Operators
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5;
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("x starts as:", x);

// // x *= 4;
// // console.log("x starts as:", x);

// // x /= 2;
// // console.log("x starts as:", x);

// // x++;
// // console.log("x starts as:", x);

// // x--;
// // console.log("x starts as:", x);

// // // comparison operators
// // console.log("=== COMPARISON OPERATIONS ===");

// // console.log("Age Comparison: ");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number Comparison");
// // console.log(25 > 20);
// // console.log(15 > 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // const isFullAge = ageSarah >= 18;

// // console.log("Sarah is an adult:",  isFullAge);

// // console.log("Complex comparison");
// // console.log(now - 1991 > now - 2018);

// // let z, y;

// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah)/2;
// // console.log(ageJonas, ageSarah, averageAge);

// // //Coding Challenge #1 - BMI Calculator
// // console.log("=== Coding Challenge #1 ===");
// // const massMark = 78;
// // const heightMark = 1.69;
// // const markBMI = massMark / heightMark ** 2;

// // const massJohn = 92;
// // const heightJohn = 1.95;
// // const johnBMI = massJohn / heightJohn ** 2;

// // const markHigherBMI = markBMI > johnBMI;

// // console.log("Marks BMI:", markBMI);
// // console.log("John BMI:", johnBMI);
// // console.log("Is Mark's BMI Higher than John?",markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);

// //if else statement
// const age = 15;

// if(age >= 18){
//     console.log('Sarah can start a driving license');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// //Coding Challenge #2
// console.log('=== Coding Challenge #2 ===');

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI: ${BMIMark} is higher than John's BMI: ${BMIJohn}`);
// }else{
//     console.log(`Mark's BMI: ${BMIMark} is lower than John's BMI: ${BMIJohn}`);
// }

//Type conversion and Coericion
//Type conversion (manual)
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

//Automatic Type Ceorcion
console.log('I am '  + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' * '2');

let n = '1' + 1;
console.log(n);

n = n - 1;
console.log(n);

//type conversion = explicit/manual (recommended)
//type coercion = Impleciit/automatic

//equality - strict
// const age = '18';
// if(age === 18)console.log('You just became an adult (strict)');
// if(age == 18)console.log('You just became an adult :D (loose)');

// console.log('18' === 18);
// console.log('18' == 18);
// console.log(18 === 18);

// console.log('0' == 0);
// console.log(0 == false);
// console.log('0' == false);
// console.log(null == undefined);

// console.log('' == 0);
// console.log(' ' == 0);

// //best practice
// const favourite = prompt("What's your favorite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23){
//     console.log('Cool! 23 is an amazing number');
// }
// if(favourite == 23){
//     console.log('23 string is also a cool number');
// }else if(favourite == 9){
//     console.log('9 is also a cool number');
// }else{
//     console.log('Numbner is not 23 or 7 or 9');
// }

// if (favourite !== 23)console.log('Why not 23?');

// const hasDriversLicense =  true;
// const hasGoodVision = true;

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Aiken is able to drive!');
// }else{
//     console.log('Someones else should drive');
// }

// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 ||  hasPermission) && hasExperience){
//     console.log('Approved to drive');
// }else{
//     console.log('Not appoved to drive');
// }

// console.log('Age 20, permission true, experience false:', (age >= 18 || hasPermission) && hasExperience);

//Club Entry System
// const age = 19;
// const hasID = false;
// const isVIP = false;

// if((age >=21 && hasID) || isVIP){
//     console.log('should enter');
// }else{
//     console.log('should not enter');
// }

// const age = 23;

// //basc ternary:conditoin ? valueifTrue : valueifFlase
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// //if else statement
// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// }else{
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'} `);

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);