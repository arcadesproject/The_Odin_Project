let playerTally = 0
let compTally = 0
let compScore = 0
let playerScore = 0

const resultText = document.getElementById('result')
const tallyText = document.getElementById('tallyResult')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const gameBtnContainer = document.getElementById('newGame')
const gameBtn = document.getElementById('gameBtn')

const computerPlay = () => {
    let number = Math.floor(Math.random() * 3)
    return  choice = number === 0 ? choice = 'rock' : 
            number === 1 ? choice = 'paper' :
            choice = 'scissors'
};

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) { resultText.textContent = 'Draw!' }
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'paper':
                    resultText.textContent = 'You Lose! Paper beats Rock.'
                    compScore++
                    break;
                case 'scissors':
                    resultText.textContent = 'You Win! Rock beats scissors.'
                    playerScore++
                    break;
            } 
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    resultText.textContent = 'You Win! Paper beats rock.'
                    playerScore++
                    break;
                case 'scissors':
                    resultText.textContent = 'You Lose! Scissors beats papers.'
                    compScore++
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    resultText.textContent = 'You Lose! Rock beats scissors.'
                    compScore++
                    break;
                case 'paper':
                    resultText.textContent = 'You Win! Scissors beats paper.'
                    playerScore++
                    break;
            }
            break;  
    }
    setScore(compScore, playerScore)
    checkWin(compScore, playerScore)
};

const playRock = () => {
    playRound('rock', computerPlay())
}

const playPaper = () => {
    playRound('paper', computerPlay())
}

const playScissors = () => {
    playRound('scissors', computerPlay())
}

const setScore = (computer, player) => {
    const playerScoreText = document.getElementById('playerScore')
    const compScoreText = document.getElementById('compScore')
    compScoreText.innerHTML = `Computer Score: ${computer}`
    playerScoreText.textContent = `Player Score: ${player}`
};

const setTally = (player, computer) => {
    const playerTallyText = document.getElementById('playerTally')
    const compTallyText = document.getElementById('compTally')
    playerTallyText.textContent = `Player Tally: ${player}`
    compTallyText.textContent = `Computer Tally: ${computer}`
};

const checkWin = (computer, player) => {
    if (player === 5) { 
        tallyText.textContent = `Player wins ${playerScore} - ${compScore}`
        playerTally++
        setTally(playerTally, compTally)
        gameEnd() 
    }
    if (computer === 5) { 
        tallyText.textContent = `Computer wins ${compScore} - ${playerScore}`
        compTally++
        setTally(playerTally, compTally)
        gameEnd() 
    }
};

const gameEnd = () => { 
    rockBtn.removeEventListener('click', playRock)
    paperBtn.removeEventListener('click', playPaper)
    scissorsBtn.removeEventListener('click', playScissors)
    gameBtnContainer.style.display = 'block'
};

const newGame = () => {
    compScore = 0
    playerScore = 0
    setScore(compScore, playerScore)
    tallyText.textContent = ''
    resultText.textContent = ''
    rockBtn.addEventListener('click', playRock)
    paperBtn.addEventListener('click', playPaper)
    scissorsBtn.addEventListener('click', playScissors)
    gameBtnContainer.style.display = 'none'
};

gameBtn.addEventListener('click', newGame)
newGame();