// console.log('Part 2 functions is ready.')

// //Funstions - Declarations and Expressions
// function logger(){
//     console.log('My name is Page');
// }

// logger();
// logger();
// logger();

// console.log(fruitProcessor(5,3));
// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;

//     return juice;
// }

// console.log(fruitProcessor(5, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// //Functions Expression
// //console.log(calcAge(2005));
// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// };

// const age1 = calcAge(2005);

// console.log(age1);
// console.log(calcAge(2005));

// function introduce(firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce('Page', 'Aurellano', 20));
// console.log(introduce('Sarah'));

// //Return Values & Function Scope
// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
    
//     if(retirement > 0){
//         return `${firstName} retires in ${retirement} years`;
//     }else{
//         return`${firstName} has already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2005, 'Page'));

// //Function scope
// const globalVar = 'I am global';

// function testScope(){
//     const localVar = 'I am local';
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope()
// console.log(globalVar);
// //console.log(localVar);

// //Challenge #1: Function Calculator

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//   }
// }
 
// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const mixed = ['Jonas', 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[4]);

// //Access the length
// console.log(friends.length);

// friends [0] = 'Jay';
// console.log(friends);

// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// };

// const ages = [calcAge(2000),calcAge(1940),calcAge(1991)];
// console.log(ages);

// const newLength = friends.push('John');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Mark');
// console.log(friends);

// //removing elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);

// //finding an element
// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Mark'));

// //includes
// console.log(friends.includes('Peter'));
// console.log(friends.includes('John'));

// //Array Iterations
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
// friends.forEach (function(friend, index){
//     console.log(`${index + 1} : ${friend}`);
// });
// friends.forEach ((friend, index) => {
//     console.log(`${index + 1} : ${friend}`);
// });

// // practical example
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach((grade) => {
//      if(grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades2.length}`);

//Challenge #2: Student Grade Manager
// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     let total = 0;
//     grades.forEach((grade) => {
//         total += grade;
//     });
//     return total / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     let highestGrade = grades[0];
//     grades.forEach((grade) => {
//         if (highestGrade < grade){
//             highestGrade = grade;
//         }
//     });
//     return highestGrade;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowestGrade = grades[0];
//     grades.forEach((grade) => {
//         if (lowestGrade < grade)return;
//         lowestGrade = grade;
//     });
//     return lowestGrade;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//     let count = 0;
//     grades.forEach((grade) => {
//         if(grade >= passingGrade){
//             console.log(grade)
//             count++;
//         }
//     });
//     return count;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

//Objects & Data Structures

//The Array Problem
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);

// console.log('=== OBJECTS ===');

//  const jonas = {
//      firstName: 'Jonas',
//      lastName: 'Schmedtmann',
//     age: 2023 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// //Dot notation - clean and readable
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // Method - function inside object
//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   }
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriviersLicense ? "a" : "no"} driver's license.`;
//   }
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age); 
// console.log(jonasAdvanced.getSummary());

//Conding Challenge #3
// const user = {
//     firstName: 'Page',
//     lastName: 'Aurellano',
//     birthYear: 2005,
//     location: 'Manila - Philippines',
//     interests: ['Badminton', 'Online Games', 'Money'],
//     friends: [
//         {
//             name: 'Morales, Sean Adrian',
//             status: 'Active'
//         },{
//             name: 'Cando, Will Allen',
//             status: 'Active'
//         },{
//             name: 'Belicano, Mark Antonio',
//             status: 'Active'
//         },{
//             name: 'Abilong, Gyrzzel Jhyne',
//             status: 'Active'
//         },{
//             name: 'Maaya, Minierva',
//             status: 'Active'
//         },
//     ],
//     isActive: true,
//     calcAge(){
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },
//     addFriend(name, status) {
//         this.friends.push({name, status});
//     },
//     getActiveFriends(){
//         let active = new Array;
//         this.friends.forEach((friend) => {
//             if(friend.status === 'Active'){
//                 active.push(friend);
//             }
//         });

//         return active;
//     },
//     getSummary(){
//         return `
//         I'm ${this.firstName} ${this.lastName}, ${this.calcAge()} - years old.\n
//         location: ${this.location}\n
//         Friends count: ${this.friends.length}\n
//         Interests:\n
//         ${(() => {
//             let interests = '';
//             this.interests.forEach((interest) => {
//                 interests += `\t- ${interest}\n\t\t`;
//             });
//             return interests;
//         })()}
//         `;
//     },
//     toggleStatus(){
//         if(this.isActive){
//             this.isActive = false;
//         }else{
//             this.isActive = true;
//         }
//     }
// };


// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

//JavaScript DOM
// const message = document.querySelector('.message');
// const button = document.querySelector('#btn');
// const heading = document.querySelector('h1');
// const input = document.querySelector('.guess');

// console.log(message);
// console.log(button);
// console.log(heading);

// const buttonById = document.getElementById('btn');
// console.log(buttonById);
// console.log(buttonById === button);

//Modifying Element Content
// const message = document.querySelector('.message');
// console.log(message.textContent);
// message.textContent = 'Hello from JavaScript';

// message.innerHTML = '<strong>Bold text from JS!</strong>';

// console.log(message.innerText);

//working with input elements
// const input = document.querySelector('.guess');
// console.log(input.value);
// input.value = 'Default text';
// input.placeholder = 'Type here';

// //Dynamic Style Changes
// const heading = document.querySelector('h1');
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// //Event Listeners and User interaction
// const button = document.querySelector('#btn');
// const message = document.querySelector('.message');

// button.addEventListener('click', () => {
//     console.log('Button was clicked!');
//     message.textContent = 'You clicked the button!';;
//     message.style.color = 'greed';
// }); 

// //Input Events - Real - Time Typing Response
// //const input = document.querySelector('.guess');
// input.addEventListener('input', () => {
//     const userText = input.value;
//     message.textContent = `You typed: ${userText}`;
//     message.style.fontSize = `${userText.TextLength + 10}px`;
// });

//Final Project
const winningScore = document.getElementById('winning-score');
const buttons = document.querySelectorAll('.btn-add');
const gameState = {
    player1: 0,
    player2: 0,
    scores: [],
    updateDisplay(){
        document.getElementById(`score-1`).textContent = this.player1;
        document.getElementById(`score-2`).textContent = this.player2;
    },
    addPoint(player, winningScore){
        const key = `player${player}`;
        this[key]++;
        //console.log(`${this.player1} : ${this.player2}`)
        if(this.player1 === winningScore || this.player2 === winningScore){
            const result = this.showWinner();
            this.scores.push({player1 : this.player1, player2 : this.player2, result:result});
            // this.scores.forEach((score) => {
            //     console.log(`P1 = ${score.player1} : P2 = ${score.player2} | ${score.result}`);
            // });
        }
    },
    showWinner(){
        const winnerName = document.querySelector('.winner-name');
        document.querySelector('.winner').classList.remove('hidden');
        if(this.player1 > this.player2){
            winnerName.textContent = 'Player 1 Won!';
            return 'Player 1 Won';
        }else if(this.player1 === this.player2){
             winnerName.textContent = 'Its a Tie!';
            return 'Its a Tie!'
        }else{
            winnerName.textContent = 'Player 2 Won!';
            return 'Player 2 Won';
        }
    },
    resetGame(){
        this.player1 = 0;
        this.player2 = 0;
        buttons.forEach((btn) => {
            btn.classList.remove('btn-disabled');
            btn.addEventListener('click', addPointClicked);
        });
        document.addEventListener('keydown', addPointKeyDown);
        document.querySelector('.winner').classList.add('hidden');
        document.querySelector('.target').textContent = 5;
        winningScore.value = 5;
        this.updateDisplay();
        winningScore.readOnly = false;
    }
};

function addPointClicked(e){
    e.target.classList.remove('btn-disabled');
    const score = Number(winningScore.value);
    gameState.addPoint(e.target.dataset.player, Number(score));
    gameState.updateDisplay();
    if(gameState.player1 === score || gameState.player2 === score){
        document.querySelectorAll('.btn-add').forEach((btn) => {
            gameFinshed();
        });
    }
}
function addPointKeyDown(event){
    const score = Number(winningScore.value);

    if (event.key === "1") {
        gameState.addPoint(1, score);
        gameState.updateDisplay();
    }

    if (event.key === "2") {
        gameState.addPoint(2, score);
        gameState.updateDisplay();
    }

    if (gameState.player1 === score || gameState.player2 === score) {
        gameFinshed();
    }
}

winningScore.addEventListener('input', () => {
    document.querySelector('.target').textContent = winningScore.value;
});

buttons.forEach((button) => {
    button.addEventListener('click', addPointClicked);
});

document.addEventListener('keydown', addPointKeyDown);

document.getElementById('btn-reset').addEventListener('click', () => {
    gameState.resetGame();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        gameState.resetGame();
    }
});

function gameFinshed(){
    document.removeEventListener('keydown', addPointKeyDown);
     buttons.forEach((btn) => {
        btn.classList.add('btn-disabled');
        btn.removeEventListener('click', addPointClicked);
    });
    winningScore.readOnly = true;
}