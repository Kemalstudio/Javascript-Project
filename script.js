'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.question').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.number-input').value);

  console.log(guess, typeof guess);

  // Когда игрок ничего не ввё
  if (!guess) {
    document.querySelector('.guess-message').textContent = 'Нет числа!';

  } else if (guess === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.question').style.width = '50rem';

  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        guess > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
