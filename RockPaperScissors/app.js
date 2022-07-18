const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices  = document.querySelectorAll('button')
let userChoice //declared to be used in the multiple events[acsess anywhere]
let computerChoice
let result


/*Where I call the Imp. Functions of the game */

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice//Recorded on click as input/play
    generateComputerChoice() //Calling before declaration?
    getResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //[ ||possibleChoices.length]

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissor'
    }

    if (randomNumber === 3) {
        computerChoice  = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice //getting/calling our computer choice in the inner html
}

function getResults() {
    // Draw event[Conts.]
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }

    //all the winning events
    if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = "You win!!"
    }

    
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You win!!"
    }

    if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = "You win!!"
    }

    //Loosing Events

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You Loose:-("
    }

    if (computerChoice === 'rock' && userChoice === 'scissor') {
        result = "You Loose:-("
    }

    if (computerChoice === 'scissor' && userChoice === 'paper') {
        result = "You Loose:-("
    }

    resultDisplay.innerHTML = result
}