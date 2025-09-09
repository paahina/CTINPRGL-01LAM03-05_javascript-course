// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';
// // Professional Development Environment Setup
// console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');
// // Create some messy code - don't worry about formatting yet
// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return 'Hello ' + name + ', you are an adult';
//   } else {
//     return 'Hello ' + name + ', you are a minor';
//   }
// };

// console.log('Current messy code example:', messyExample('John', 25));
// console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');
// // Extension Installation Test

// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);
// // Prettier Configuration Test

// // This code has terrible formatting - Prettier will fix it!
// const prettierTest = {
//   firstName: 'Sarah',
//   lastName: 'Johnson',
//   skills: ['JavaScript', 'React', 'Node.js'],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );
// // Create this with terrible formatting:
// const studentTest = {
//   firstName: 'Page',
//   skills: ['HTML', 'CSS', 'JavaScript'],
//   experience: 'Beginner',
//   goals: ['become-developer', 'build-projects'],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };
// // Live Server Testing
// // Test 1: Basic live reload
// let liveServerTest = 'Initial message - change #1';
// console.log('Live Server test:', liveServerTest);
// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;
// console.log(`Live Server update #${updateCount} at ${timeStamp}`);
// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// // Code Snippets Testing
// // Type 'cl' then press Tab - it should expand to console.log();
// console.log('Testing snippet functionality - cl + Tab created this!');

// // Type 'func' then press Tab - it should create a function template
// function testSnippets() {
//   console.log('Function created with snippet - func + Tab!');
//   return 'Snippets working perfectly!';
// }
// testSnippets();

// // Type 'arrow' then press Tab - it should create an arrow function template
// const snippetTest = message => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest('Snippets save so much typing time!');

// // Environment Setup Verification
// console.log('🎉 Professional Development Environment Complete!');
// console.log('✅ Prettier: Automatic code formatting');
// console.log('✅ Live Server: Automatic browser refresh');
// console.log('✅ Snippets: Fast code generation');
// console.log('✅ Extensions: Enhanced productivity');
// console.log('Ready for professional JavaScript development!');

// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }
// calculateTimeSavings();
'use strict';
console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');
console.log(
  'Key insight: PRofessional developers think sytematically, not just code'
);
console.log('Goal: Transform from beginner to professional probelm solver');
console.log('4-Step Framework: Understand → Divide → Research → Implement');
// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
// EXTENDED PROBLEM: Two Arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  'Problem-solving framework applied successfully to extended challenge!'
);
// PROBLEM-SOLVING FRAMEWORK MASTERY

/*
FRAMEWORK SUCCESS ANALYSIS:
- ✅ Solved complex problems systematically
- ✅ Broke problems into manageable pieces
- ✅ Applied research when needed
- ✅ Implemented and tested successfully
- ✅ Adapted to changing requirements efficiently
*/

console.log('🎯 Framework mastered - ready for independent problem solving!');
