let playerTally = 0
let compTally = 0
let drawTally = 0
const gameBtn = document.getElementById('newGame')
gameBtn.addEventListener('click', function () {
    game()
})


const computerPlay = () => {
    let number = Math.floor(Math.random() * 3)
    return  choice = number === 0 ? choice = 'rock' : 
            number === 1 ? choice = 'paper' :
            choice = 'scissors'
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    const resultText = document.getElementById('result')
    if (playerSelection === computerSelection) { resultText.textContent = 'Draw!' }
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'paper':
                    resultText.textContent = 'You Lose! Paper beats Rock.'
                    return 0
                case 'scissors':
                    resultText.textContent = 'You Win! Rock beats scissors.'
                    return 1
            } 
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    resultText.textContent = 'You Win! Paper beats rock.'
                    return 1
                case 'scissors':
                    resultText.textContent = 'You Lose! Scissors beats papers.'
                    return 0
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    resultText.textContent = 'You Lose! Rock beats scissors.'
                    return 0
                case 'paper':
                    resultText.textContent = 'You Win! Scissors beats paper.'
                    return 1
            }
            break;  
    }
}

const setScore = (computer, player, reset) => {
    if (reset === true) { }
    const playerScoreText = document.getElementById('playerScore')
    const compScoreText = document.getElementById('compScore')
    compScoreText.innerHTML = `Computer Score: ${computer}`
    playerScoreText.textContent = `Player Score: ${player}`
}

const setTally = (computer, player, draw) => {
    const playerTallyText = document.getElementById('playerTally')
    const compTallyText = document.getElementById('compTally')
    const drawTallyText = document.getElementById('drawTally')
    playerTallyText.textContent = `Player Tally: ${player}`
    compTallyText.textContent = `Computer Tally: ${computer}`
    drawTallyText.textContent = `Draw Tally: ${draw}`
}

const game = () => {
    let compScore = 0;
    let playerScore = 0;
    setScore(compScore, playerScore, true)
    const tallyText = document.getElementById('tallyResult')
    tallyText.textContent = ''
    const resultText = document.getElementById('result')
    resultText.textContent = ''
    for (let i = 0; i < 5; i++) {
        let userChoice = window.prompt('Rock, Paper or Scissors?')
        let computerChoice = computerPlay()
        let result = playRound(userChoice, computerChoice);
        if (result === 1) { playerScore ++ } 
        if (result === 0) { compScore ++ } 
        setScore(compScore, playerScore, false)
    }
    if (playerScore > compScore) {
        playerTally++
        tallyText.textContent = `Player wins ${playerScore} - ${compScore}`
    } else if (compScore > playerScore) {
        compTally++
        tallyText.textContent = `Computer wins ${compScore} - ${playerScore}`
    } else {
        drawTally++
        tallyText.textContent = `Draw ${playerScore} each`
    }
    setTally(compTally, playerTally, drawTally)
}

game();