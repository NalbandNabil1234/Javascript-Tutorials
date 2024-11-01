let randomNumber = parseInt(Math.random() * 10 + 1)
// console.log(randomNumber)

//---------------all html elements and attributes selected for use---------------

// form container
const form = document.querySelector('form')
const userInput = document.querySelector('#guessField')
const submitButton = document.querySelector('#subt')

// resultParas constainer
const resultParasField = document.querySelector('.resultParas')
const prevGuesses = document.querySelector('.guesses')
const remainingChances = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

// ================= extra variables===========

let arrOfGuesses = []
let guessCount = 1
let startGame = true
let para = document.createElement('p')

if (startGame === true) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateInput(guess)
    })
}

function validateInput(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Number')
    } else if (guess < 1) {
        alert('Please Enter a Number more than 0')
    } else if (guess > 10) {
        alert('Please Enter a Number less than 11')
    } else{
        arrOfGuesses.push(guess)
        if(guessCount === 11){
            displayGuess(guess)
            displayMsg(`You lose! The Number was : ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You won`)
        endGame()
    } else if(guess < randomNumber){
        displayMsg(`Number is Too Low`)
    } else if(guess > randomNumber){
        displayMsg(`Number is Too high`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessCount++
    prevGuesses.innerHTML += `${guess}`
    remainingChances.innerHTML=`${10-guessCount}`
}

function displayMsg(msg){
    lowOrHigh.innerHTML=`<p>${msg}</p>`
}


function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    para.classList.add('button')
    para.innerHTML=`<h3 id="startOver">Start Again</h3>`
    resultParasField.appendChild(para)
    startGame = false
    startAgain(para)
}

function startAgain(){
    const start = document.querySelector('#startOver')
    start.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 10 + 1)
        startGame=true
        prevGuesses.innerHTML=''
        guessCount = 1
        remainingChances.innerHTML=`${10-guessCount}`
        arrOfGuesses = []
        userInput.removeAttribute('disabled')
        resultParasField.removeChild(para)
    })

}

