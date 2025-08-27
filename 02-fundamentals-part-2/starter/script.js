console.log('Part 2 functions is ready.')

//Funstions - Declarations and Expressions
function logger(){
    console.log('My name is Page');
}

logger();
logger();
logger();

console.log(fruitProcessor(5,3));
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice;
}

console.log(fruitProcessor(5, 3));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

//Functions Expression
//console.log(calcAge(2005));
const calcAge = function (birthYear){
    return 2025 - birthYear;
};

const age1 = calcAge(2005);

console.log(age1);
console.log(calcAge(2005));

function introduce(firstName, lastName, age){
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
    return introduction;
}

console.log(introduce('Page', 'Aurellano', 20));
console.log(introduce('Sarah'));

//Return Values & Function Scope
function yearsUntilRetirement(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0){
        return `${firstName} retires in ${retirement} years`;
    }else{
        return`${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement(2005, 'Page'));

//Function scope
const globalVar = 'I am global';

function testScope(){
    const localVar = 'I am local';
    console.log(globalVar);
    console.log(localVar);
}

testScope()
console.log(globalVar);
//console.log(localVar);

//Challenge #1: Function Calculator

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
  }
}
 
// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
 