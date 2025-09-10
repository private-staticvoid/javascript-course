// // Game Development Hour 1 - Game Foundation & DOM Basics
// 'use strict';

// console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

// // ===== DOM Elements Selection - The Foundation =====

// const messageEL = document.querySelector('.message');
// console.log(messageEL);

// console.log(messageEL.textContent);

// messageEL.textContent = 'HELLO FROM COLOMBIA!';

// const scoreEL = document.querySelector('.score');
// console.log(scoreEL.textContent);

// scoreEL.textContent = '20';

// const numberEL = document.querySelector('.number');
// console.log(numberEL.textContent);

// numberEL.textContent = '11';

// const highscoreEL = document.querySelector('.highscore');
// console.log(`Current highscore: ${highscoreEL.textContent}`);

// const guessEL = document.querySelector(`.guess`);
// guessEL.value = 10;
// console.log(guessEL.value);

// ===== Game State Variable =====

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number: `, secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game State initialized...`);

// //playername, attemps, gameActiveBolean

// const playerNameEL = document.querySelector(`.player`);
// playerNameEL.textContent = 'Aki';

// const attemptsEL = document.querySelector(`.attempts`);
// let attempts = 10;
// attemptsEL.textContent = attempts;

// const gameActiveBolean = true;

let playerName = 'Aki';
let attempts = 10;
let gameActiveBolean = true;

console.log(
  `Player: ${playerName} | Attempts: ${attempts} | Game Active: ${gameActiveBolean}`
);

// ===== Basic Game Logic - Handling Click Events =====

document.querySelector(`.check`).addEventListener('click', function () {
  console.log('Button Clicked');

  const guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    console.log('Correct Guess, Player Wins! 🎉');
    document.querySelector(`.message`).textContent = '🎉 Correct Number!';
    document.querySelector(`.number`).textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Number Too High!');
    document.querySelector(`.message`).textContent = '📈 Too High!';
  } else if (guess < secretNumber) {
    console.log('Number Too Low!');
    document.querySelector(`.message`).textContent = '📉 Too Low!';
  }
});
