'use strict';

const messageEl = document.querySelector('.message');
//console.log(messageEl);

messageEl.textContent = 'Hello form javascript';

const scoreEl = document.querySelector('.score');
//scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
//numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
//guessInputEl.value = 6;

//Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
//==========================================================//
//Basic game logic

document.querySelector('.check').addEventListener('click', () => {
  //console.log('check button has been clicked');
  const guess = Number(document.querySelector('.guess').value);
  //console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👌Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '😓Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '😅Too low!';
  }
});
