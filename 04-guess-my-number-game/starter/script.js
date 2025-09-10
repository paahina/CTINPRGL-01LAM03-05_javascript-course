'use strict';
// Constants & Selectors
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helpers
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

//Game state variables
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(secretNumber);
let score = START_SCORE;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
  console.log(secretNumber);
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}
//==========================================================//
//Basic game logic

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessInputEl.value);

  if (!guess) return setMessage('Please input a number');

  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}`);
  if (guess === secretNumber) {
    setMessage('You have won!!!!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay();
    clearInput();
    return;
  }
  setMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
  score--;
  setScore(score);
  if (score < 1) {
    setMessage('Game over, please press again!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

// Game Restart
againBtnEl.addEventListener('click', () => {
  resetGameState();
  renderInitialUI();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener('keydown', () => {
  guessInputEl.focus();
});
