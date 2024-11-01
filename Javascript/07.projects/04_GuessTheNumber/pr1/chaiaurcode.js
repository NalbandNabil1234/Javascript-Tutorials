let randomNumber = parseInt(Math.random()*10+1)

const userInput = document.querySelector('#guessField')
const submitButton = document.querySelector('#subt')

const secondContainer = document.querySelector('.resultParas')
let guessHistory = document.querySelector('.guesses')
let guessRemaining = document.querySelector('.lastResult')
let lowOrHigh = document.querySelector('.lowOrHi')

let para = document.createElement('p')

let startGame = true
let arrOfGuesses = []
let guessCount = 0

if(startGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter number not string or char')
    } else if(guess < 1){
        alert('please enter number > 0')
    } else if(guess > 10){
        alert('please enter number < 11')
    } else{
        
        if(guessCount === 9){
            updateGuessField(guess)
            displayMsg(`You lose and the correct guess was : ${randomNumber}`)
            endGame()
        } else{
            updateGuessField(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You won!`)
        endGame()
    } else if(guess < randomNumber){
        displayMsg(`the guess is too low`)
    } else{
        displayMsg(`The guess is too high`)
    }
}

function displayMsg(msg){
    lowOrHigh.innerHTML=`${msg}`
}

function updateGuessField(guess){
    arrOfGuesses.push(`${guess} `)
    userInput.value=''
    guessHistory.innerHTML=`${arrOfGuesses }`
    guessCount++
    console.log(guessCount)
    guessRemaining.innerHTML=`${10-guessCount}`
}

function endGame(){
    startGame = false
    guessHistory.innerHTML = ''
    userInput.setAttribute('disabled', '')
    para.classList.add('button')
    para.innerHTML=`<p id="startAgainButton">Start New Game</p>`
    secondContainer.appendChild(para)
    startAgain()
}

function startAgain(){
    const startButton = document.querySelector('#startAgainButton')
    startButton.addEventListener('click', function(){
        arrOfGuesses = []
        startGame = true
        randomNumber = parseInt(Math.random()*10+1)
        lowOrHigh.innerHTML=''
        guessCount = 0
        guessRemaining.innerHTML=`${11-guessCount}`
        userInput.removeAttribute('disabled')
        secondContainer.removeChild(para)
    })
}
