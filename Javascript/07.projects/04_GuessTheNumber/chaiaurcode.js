const form = document.querySelector('.form')
const randomNumber = parseInt(Math.random()* 3 + 1)
console.log(randomNumber)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')

const resultParas = document.querySelector('.resultParas')
const preGuesses = document.querySelector('.guesses')
const remainingChance = document.querySelector('.lastResult')

const messageField = document.querySelector('.lowOrHi')

let start = 0;
let arrOfPrevGuesses = []
let gameStart = true

if (gameStart) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const inputValue = parseInt(userInput.value)
        console.log(inputValue)
        validateInputValue(inputValue)
    })
}

function validateInputValue(inputValue) {
    if (inputValue <= 0 || inputValue > 100) {
        alert('Please Enter inputValue between 1 and 100')
    } else if (isNaN(inputValue)) {
        alert('Please Enter a Number')
    } else{
        arrOfPrevGuesses.push(inputValue)
        start++;
        preGuesses.innerText = `${arrOfPrevGuesses}  `
        remainingChance.innerHTML = `${11 - start}`
        if(inputValue === randomNumber){
            console.log(inputValue)
            wonMsg();
        } else{
            if(start === 10){
                userInput.setAttribute('disabled', '')
                loseMsg()
            }
        }

    }
}

function wonMsg() {
    const won = document.querySelector('p')
    won.innerHTML = '<p>You Won</p>'
    resultParas.appendChild(won)
}

function loseMsg() {
    const lose = document.querySelector('p')
    lose.innerHTML = '<p>You lose</p>'
    resultParas.appendChild(lose)
}








// const form = document.querySelector('.form');
// let randomNumber = generateRandomNumber();
// const userInput = document.querySelector('#guessField');
// const submit = document.querySelector('#subt');

// const resultParas = document.querySelector('.resultParas');
// const preGuesses = document.querySelector('.guesses');
// const remainingChance = document.querySelector('.lastResult');

// const messageField = document.querySelector('.lowOrHi');

// let start = 1;
// let arrOfPrevGuesses = [];
// const maxChances = 10;

// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     const inputValue = parseInt(userInput.value);
//     validateInputValue(inputValue);
// });

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1; // 1 to 100
// }

// function validateInputValue(value) {
//     if (value <= 0 || value > 100) {
//         alert('Please Enter a value between 1 and 100');
//     } else if (isNaN(value)) {
//         alert('Please Enter a Number');
//     } else {
//         arrOfPrevGuesses.push(value);
//         preGuesses.innerText = `Previous guesses: ${arrOfPrevGuesses.join(', ')}`;
//         remainingChance.innerHTML = `Remaining chances: ${maxChances - start + 1}`;

//         if (value === randomNumber) {
//             wonMsg();
//         } else {
//             if (start >= maxChances) {
//                 loseMsg();
//             } else {
//                 messageField.innerText = value < randomNumber ? 'Too low!' : 'Too high!';
//                 start++;
//             }
//         }
//     }
// }

// function wonMsg() {
//     const won = document.createElement('p');
//     won.innerText = 'You Won! The number was ' + randomNumber;
//     resultParas.appendChild(won);
//     userInput.setAttribute('disabled', '');
// }

// function loseMsg() {
//     const lose = document.createElement('p');
//     lose.innerText = 'You Lost! The number was ' + randomNumber;
//     resultParas.appendChild(lose);
//     userInput.setAttribute('disabled', '');
// }

// Optional: Add a reset functionality to start a new game




