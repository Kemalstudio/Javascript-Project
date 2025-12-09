'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.number-input').value);

  console.log(guess, typeof guess);

  // Когда игрок ничего не ввёл
  if (!guess) {
    document.querySelector('.guess-message').textContent = 'Нет числа!';

    // Когда игро
  } else if (guess === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.question').style.width = '50rem';

    // Обновляем
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Когда не угадал
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

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Начни угадывать...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
