'use strict';

let currentScore, activePlayer, scores, isGameOver;

const scoreZeroElement = document.querySelector('#score--0');
const scoreOneElement = document.querySelector('#score--1');

const currentScoreZeroElement = document.querySelector('#current--0');
const currentScoreOneElement = document.querySelector('#current--1');

const playerZeroElement = document.querySelector('.player--0');
const playerOneElement = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');

const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newButton = document.querySelector('.btn--new');

const init = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  isGameOver = false;

  currentScoreZeroElement.textContent = 0;
  currentScoreOneElement.textContent = 0;
  scoreZeroElement.textContent = 0;
  scoreOneElement.textContent = 0;

  playerZeroElement.classList.add('player--active');
  playerOneElement.classList.remove('player--active');
  playerZeroElement.classList.remove('player--winner');
  playerOneElement.classList.remove('player--winner');
  diceElement.classList.add('hidden');
};

const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZeroElement.classList.toggle('player--active');
  playerOneElement.classList.toggle('player--active');
};

init();

scoreZeroElement.textContent = 0;
scoreOneElement.textContent = 0;
diceElement.classList.add('hidden');

// Handle dice roll.
rollButton.addEventListener('click', () => {
  if (isGameOver) return;

  // Generate a random dice roll.
  const rolledValue = Math.floor(Math.random() * 6) + 1;

  const activePlayerCurrentScore = document.querySelector(
    `#current--${activePlayer}`
  );

  // Display the dice.
  diceElement.attributes.src.value = `dice-${rolledValue}.png`;
  diceElement.classList.remove('hidden');

  if (rolledValue !== 1) {
    // Add rolled value to current score.
    currentScore += rolledValue;
    activePlayerCurrentScore.textContent = currentScore;
    return;
  }

  // Reset current score to 0. Switch to next player.
  currentScore = 0;
  activePlayerCurrentScore.textContent = 0;
  switchPlayer();
});

// Handle hold
holdButton.addEventListener('click', () => {
  if (isGameOver) return;

  // Add current score to active player's score, then display active player's score.
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Check if active player's score is >= 100.
  if (scores[activePlayer] >= 10) {
    const activePlayerElement = document.querySelector(
      `.player--${activePlayer}`
    );

    // Finish the game.
    isGameOver = true;
    activePlayerElement.classList.remove('player--active');
    activePlayerElement.classList.add('player--winner');
    diceElement.classList.add('hidden');
    return;
  }

  // Reset current score to 0. Switch to next player.
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  switchPlayer();
});

// Start a new game.
newButton.addEventListener('click', init);
