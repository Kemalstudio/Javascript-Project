'use strict';

// console.log(document.querySelector('.guess-message').textContent); 

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// console.log(document.querySelector('.number-input').value);

// document.querySelector('.number-input').value = 13;

// console.log(document.querySelector('.number-input').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const quessingNumber =  document.querySelector('.number-input').value;
    console.log(quessingNumber, typeof quessingNumber);

    if (!quessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    } else if (quessingNumber == secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
    } else if (quessingNumber > secretNumber) {
        document.querySelector('.guess-message').textContent = 'Слишком много!';
    } else if (quessingNumber < secretNumber) {
        document.querySelector('.guess-message').textContent = 'Слишком мало!';
    }
})