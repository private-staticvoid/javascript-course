// // // Game Development Hour 1 - Game Foundation & DOM Basics
// // 'use strict';

// // console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

// // // ===== DOM Elements Selection - The Foundation =====

// // const messageEL = document.querySelector('.message');
// // console.log(messageEL);

// // console.log(messageEL.textContent);

// // messageEL.textContent = 'HELLO FROM COLOMBIA!';

// // const scoreEL = document.querySelector('.score');
// // console.log(scoreEL.textContent);

// // scoreEL.textContent = '20';

// // const numberEL = document.querySelector('.number');
// // console.log(numberEL.textContent);

// // numberEL.textContent = '11';

// // const highscoreEL = document.querySelector('.highscore');
// // console.log(`Current highscore: ${highscoreEL.textContent}`);

// // const guessEL = document.querySelector(`.guess`);
// // guessEL.value = 10;
// // console.log(guessEL.value);

// // ===== Game State Variable =====

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(`Secret Number: `, secretNumber);

// let score = 20;
// let highscore = 0;

// document.querySelector(`.score`).textContent = score;
// document.querySelector(`.highscore`).textContent = highscore;

// console.log(`Game State initialized...`);

// // //playername, attemps, gameActiveBolean

// // const playerNameEL = document.querySelector(`.player`);
// // playerNameEL.textContent = 'Aki';

// // const attemptsEL = document.querySelector(`.attempts`);
// // let attempts = 10;
// // attemptsEL.textContent = attempts;

// // const gameActiveBolean = true;

// let playerName = 'Aki';
// let attempts = 10;
// let gameActiveBolean = true;

// console.log(
//   `Player: ${playerName} | Attempts: ${attempts} | Game Active: ${gameActiveBolean}`
// );

// // ===== Basic Game Logic - Handling Click Events =====

// document.querySelector(`.check`).addEventListener('click', function () {
//   console.log('Button Clicked');

//   const guess = Number(document.querySelector('.guess').value);

//   //if you did not inpuit any number it shows this
//   if (!guess) {
//     document.querySelector(`.message`).textContent = ' No Number!';
//     return;
//   }

//   if (guess < 1 || guess > 20) {
//     document.querySelector(`.message`).textContent =
//       ' Number must be between 1 and 20!';
//     return;
//   }

//   if (guess === secretNumber) {
//     console.log('Correct Guess, Player Wins! 🎉');
//     document.querySelector(`.message`).textContent = '🎉 Correct Number!';
//     document.querySelector(`.number`).textContent = secretNumber;
//     document.body.style.backgroundColor = '#60b347';
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(`.highscore`).textContent = highscore;
//       document.querySelector(
//         `.message`
//       ).textContent = `You are a winner Baby!🎉`;
//       document.querySelector(`.guess`).disabled = true;
//       document.querySelector(`.check`).disabled = true;
//     }
//   } else if (guess > secretNumber) {
//     console.log('Number Too High!');
//     document.querySelector(`.message`).textContent = '📈 Too High!';
//     score--;
//     document.querySelector(`.score`).textContent = score;

//     if (score < 1) {
//       document.querySelector(`.message`).textContent =
//         ' You are a loser Dummy ';
//       document.querySelector(`.number`).textContent = secretNumber;
//       document.querySelector(`.guess`).disabled = true;
//       document.querySelector(`.check`).disabled = true;
//       document.body.style.backgroundColor = '#ff0000';
//     }
//   } else if (guess < secretNumber) {
//     console.log('Number Too Low!');
//     document.querySelector(`.message`).textContent = '📉 Too Low!';
//     score--;
//     document.querySelector(`.score`).textContent = score;

//     if (score < 1) {
//       document.querySelector(`.message`).textContent = ' You are a loser Dummy';
//       document.querySelector(`.number`).textContent = secretNumber;
//       document.querySelector(`.guess`).disabled = true;
//       document.querySelector(`.check`).disabled = true;
//       document.body.style.backgroundColor = `#ff0000`;
//     }
//   }
// });

// document.querySelector(`.again`).addEventListener(`click`, function () {
//   console.log(`again is working`);
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(`Your New Secret Number: `, secretNumber);
//   document.querySelector(`.message`).textContent = `Start guessing....`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.score`).textContent = score;
//   document.querySelector(`.guess`).value = ``;
//   document.querySelector(`.guess`).disabled = false;
//   document.querySelector(`.check`).disabled = false;
//   document.body.style.backgroundColor = ``;
// });

//======================================================

'use strict';

// ===== Constants =====
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// ===== DOM Elements =====
const bodyEL = document.querySelector('body');
const messageEL = document.querySelector('.message');
const scoreEL = document.querySelector('.score');
const numberEL = document.querySelector('.number');
const highscoreEL = document.querySelector('.highscore');
const guessEL = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// ===== UI Helpers =====
function setMessage(text) {
  messageEL.textContent = text;
}
function setNumber(value) {
  numberEL.textContent = value;
}
function setScore(value) {
  scoreEL.textContent = value;
}
function setHighscore(value) {
  highscoreEL.textContent = value;
}
function setBackground(color) {
  document.body.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessEL.disabled = disabled;
  checkBtn.disabled = disabled;
}
function getGuess() {
  return Number(guessEL.value);
}
function clearInput() {
  guessEL.value = '';
}

// ===== Game State =====
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

// ===== Initialization =====
function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
  guessEL.focus(); // focus input on start
}

renderInitialUI();
console.log(`Secret Number: `, secretNumber);

// ===== Game Logic =====
checkBtn.addEventListener('click', function () {
  const guess = getGuess();
  if (!guess) return setMessage('⛔ No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    // Correct Guess
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('#60b347');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
  } else {
    // Wrong Guess
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('💥 You lost the game!');
      setScore(0);
      setNumber(secretNumber);
      setBackground('#ff0000');
      disablePlay(true);
    }
  }
  clearInput();
});

// ===== Reset Button =====
againBtn.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
  console.log(`New Secret Number: `, secretNumber);
});

// ===== Extra Features =====

// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtn.disabled) {
    checkBtn.click();
  }
});

// Focus input on restart
againBtn.addEventListener('click', function () {
  guessEL.focus();
});
