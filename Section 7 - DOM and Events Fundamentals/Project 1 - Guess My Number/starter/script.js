"use strict";

const message = document.querySelector(".message");
const scoreBoard = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const displayNumber = document.querySelector(".number");

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const guessInput = document.querySelector(".guess");

const INITIAL_SCORE = 20;

let score = INITIAL_SCORE;
let highScoreValue = 0;

// Generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

const handleCheckBtnClick = () => {
  const guess = Number(guessInput.value);

  // Score is already 0. Game over!.
  if (score === 0) return;

  // No number entered
  if (!guess) {
    message.textContent = "No number entered!";
    return;
  }

  // Correct number. You won the game!
  if (guess == secretNumber) {
    message.textContent = "Correct Number!";
    displayNumber.textContent = secretNumber;

    displayNumber.style.width = "30rem";
    document.body.style.backgroundColor = "#60b347";
    checkBtn.disabled = true;

    if (highScoreValue < score) {
      highScoreValue = score;
      highScore.textContent = highScoreValue;
    }
    return;
  }

  // Incorrect number when score is 1. Score is now 0. Game over!
  if (score === 1) {
    message.textContent = "You lost the game!";
    score = 0;
    scoreBoard.textContent = score;
    checkBtn.disabled = true;
    return;
  }

  // Set message to too high or too low based on the guess. Then decrement the score and display it.
  message.textContent = guess > secretNumber ? "Too high!" : "Too low!";
  scoreBoard.textContent = --score;
};

const resetGame = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = INITIAL_SCORE;
  guessInput.value = "";
  scoreBoard.textContent = INITIAL_SCORE;
  message.textContent = "Start guessing...";
  displayNumber.textContent = "?";
  document.body.style.backgroundColor = "#222";
  displayNumber.style.width = "15rem";
  checkBtn.disabled = false;
};

checkBtn.addEventListener("click", handleCheckBtnClick);
againBtn.addEventListener("click", resetGame);
