'use strict';

const btnCheck = document.querySelector('.check');
const guessedNumber = document.querySelector('.guess');
const displayMessage = document.querySelector('.message');
const rightGuess = document.querySelector('.number');
const btnAgain = document.querySelector('.again');
const currentScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const { body } = document;

let randomNumber = 0;
let userEnteredNumber;
let score = 10;
let highscore = 0;

function resetInputField() {
	guessedNumber.value = '';
	guessedNumber.focus();
}

function randomNumberGenerator() {
	randomNumber = Math.floor(Math.random() * 20);
	console.log(randomNumber);
	currentScore.textContent = 10;
	resetInputField();
}

function checkRange() {
	return userEnteredNumber === randomNumber
		? 'Correct Number!'
		: userEnteredNumber === 0
		? 'No Number'
		: userEnteredNumber > randomNumber
		? 'Too high!'
		: 'Too low!';
}

function wonGame() {
	if (userEnteredNumber === randomNumber) {
		body.style.backgroundColor = '#60b347';
		rightGuess.textContent = userEnteredNumber;
		if (score > highscore) {
			highscore = score;
			highScore.textContent = highscore;
		}
	}
}

function lostGame() {
	if (currentScore.textContent <= 1) {
		displayMessage.textContent = '💥 You lost the game!';
	}
}

function changeCurrentScore() {
	if (userEnteredNumber && currentScore.textContent) {
		score--;
		currentScore.textContent = score;
	}
}

function checkNumber() {
	userEnteredNumber = Number(guessedNumber.value);
	displayMessage.textContent = checkRange();
	wonGame();
	lostGame();
	changeCurrentScore();
	resetInputField();
}

function resetAll() {
	displayMessage.textContent = 'Start guessing...';
	rightGuess.textContent = '?';
	body.style.backgroundColor = '#222';
	score = 10;
	currentScore.textContent = score;
	randomNumberGenerator();
}

// on load
randomNumberGenerator();

btnCheck.addEventListener('click', checkNumber);
btnAgain.addEventListener('click', resetAll);
