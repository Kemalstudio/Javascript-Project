'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScores = [0, 0];
let currnetScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `img/dice${diceNumber}.png`;

    // 3. Check for rolled 1
    if (diceNumber !== 1) {
        // Finish the game
        currnetScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currnetScore;
    } else {
        currnetScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currnetScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');

    }
})

btnHold.addEventListener('click', function () {
    // 1. Add current score to active player's score
    totalScores[activePlayer] += currnetScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

    // 2. Check if player's score is >=100
    if (totalScores[activePlayer] >= 100) {
        // Finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceElement.classList.add('hidden');
        btnRoll.disabled = true;
        btnHold.disabled = true;
    } else {
        // Switch to the next play
        currnetScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currnetScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }
});
