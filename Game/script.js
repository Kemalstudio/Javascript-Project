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
let totalScores = [0, 0];
let currnetScore = 0;
let activePlayer = 0;

function launchFireworks() {
  const container = document.querySelector('.fireworks');
  container.style.display = 'block';

  for (let i = 0; i < 60; i++) {
    const f = document.createElement('div');
    f.classList.add('firework');

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 250 + 50;

    f.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
    f.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);

    f.style.left = innerWidth / 2 + 'px';
    f.style.top = innerHeight / 2 + 'px';

    container.appendChild(f);
    setTimeout(() => f.remove(), 1000);
  }

  setTimeout(() => {
    container.style.display = 'none';
  }, 1200);
}

function switchPlayer() {
  currnetScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `img/dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    currnetScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currnetScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  totalScores[activePlayer] += currnetScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScores[activePlayer];

  if (totalScores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    diceElement.classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;

    launchFireworks(); // 🎆 Салют после победы!
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  totalScores = [0, 0];
  currnetScore = 0;
  activePlayer = 0;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  btnRoll.disabled = false;
  btnHold.disabled = false;

  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
});