const gameBoard = (() => {
    let board =  [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    function updateBoard(type, one, two) {
        board[one][two] = type
    }

    function resetBoard() {
        for (let i = 0; i < board.length; i++) {
            board[i].forEach((item, index) => { 
                board[i][index] = ''
            })
        }
    }

    return { board, updateBoard, resetBoard }
})();

const displayController = (() => {
    const container = document.getElementById('container')
    const blocks = Array.from(document.getElementsByClassName('block'))
    const opponentInfo = document.getElementById('opponent')
    const marker = document.getElementById('marker')

    blocks.forEach((block) => {
        block.addEventListener('click', function(e) {
            markBoard(e)
        })
        container.appendChild(block)
    })

    const restartButton = document.getElementById('restart')
    const human = document.getElementById('human')
    const computer = document.getElementById('computer')
    const x = document.getElementById('x')
    const o = document.getElementById('o')
    restartButton.addEventListener('click', reset)
    human.addEventListener('click', setHuman)
    computer.addEventListener('click', setComputer)
    x.addEventListener('click', switchX)
    o.addEventListener('click', switchO)

    function markBoard({target}) {
        if (target.textContent !== '') { return }
        gameController.turn ? target.textContent = 'X' : target.textContent = 'O'
        const one = target.dataset.one
        const two = target.dataset.two
        gameController.turn ? gameBoard.updateBoard('X', one, two) : gameBoard.updateBoard('O', one, two)
        if (gameController.checkGameOver(one, two)) {
            return
        } else {
            player.computer ? player.takeTurn() : gameController.takeTurn()
        }
    }

    function computerMark(one, two) {
        const index = (one * 3) + two
        const container = document.getElementById('container')
        gameController.turn ? container.children[index].textContent = 'O' :
                        container.children[index].textContent = 'X'
        gameController.checkGameOver(one, two)
    }

    function reset() {
        blocks.forEach(block => block.textContent = '')
        gameBoard.resetBoard()
        gameController.resetCount()
        gameController.initialTurn()
        checkComputerStart()
    }

    function setHuman() {
        player.humanOpponent()
        reset()
        opponentInfo.textContent = 'vs. Human'
    }

    function setComputer() {
        player.computerOpponent()
        reset()
        opponentInfo.textContent = 'vs. Computer'
    }

    function switchX() {
        marker.textContent = 'X'
        gameController.switchX()
    }

    function switchO() {
        marker.textContent = 'O'
        gameController.switchO()
    }

    function checkComputerStart() {
        if (player.computer && !gameController.turn) {
            player.takeTurn()
        }
    }

    return { reset, computerMark }
})();

const gameController = (() => {
    let turn = true
    let vertical = 0
    let diag = 0

    function gameOver() {
        alert('Game Over')
        displayController.reset()
    }

    function takeTurn() {
        turn = !turn
    }

    function switchX() {
        turn = true
        displayController.reset()
    }

    function switchO() {
        turn = false
        displayController.reset()
    }

    function initialTurn() {
        document.getElementById('marker').textContent === 'X' ? turn = true :
        turn = false    
    }

    function resetCount() {
        vertical = 0
        diag = 0
    }

    function counterCheck(count) {
        if (count === 3) { 
            gameOver() 
            return true
        } else {
            vertical = 0
            diag = 0
        }
    }

    function checkGameOver(one, two) {
        //Check draw
        if (!gameBoard.board.some(row => row.includes(''))) {
            gameOver()
            return true
        } 

        //check horizontal
        if (gameBoard.board[one].every(item => item === gameBoard.board[one][two])) {
            gameOver()
            return true
        } 

        //check vertical
        for (let i = 0; i < gameBoard.board.length; i++) {
            if (gameBoard.board[one][two] === gameBoard.board[i][two]) {
                vertical += 1
            }
        }
        if (counterCheck(vertical)) { 
            return true 
        }

        for (let i = 0; i < gameBoard.board.length; i++ ) {
            if (gameBoard.board[one][two] === gameBoard.board[i][i]) {
                diag++
            }
        }
        if (counterCheck(diag)) { return true }

        for (let i = 0; i < gameBoard.board.length; i++) {
            for (let j = gameBoard.board.length - 1; j >= 0; j--) {
                if (gameBoard.board[one][two] === gameBoard.board[i][j]
                    && (i + j === 2)) {
                    diag++
                }
            }
        }
        if (counterCheck(diag)) { return true }
    }

    //need a getter to keep updated value of turn rather than initial copy
    return { 
        get turn() { return turn }, 
        checkGameOver, 
        takeTurn, 
        switchX, 
        switchO,
        resetCount,
        initialTurn
    }
})();

const player = (() => {
    let start = true
    let computer = true

    function setHuman() {
        start = true
    }
    
    function setComputer() {
        start = false
    }

    function computerOpponent() {
        computer = true
    }

    function humanOpponent() {
        computer = false
    }

    function takeTurn() {
        //simple ai first - easy/hard
        const one = randomNumber()
        const two = randomNumber()
        if (numberChoice(one, two)) {
            gameController.turn ? gameBoard.updateBoard('O', one, two) : gameBoard.updateBoard('X', one, two)
            displayController.computerMark(one, two)
        } else {
            takeTurn()
        }
    }

    function numberChoice(one, two) {
        return gameBoard.board[one][two] === '' ? true : false
    }

    function randomNumber() {
        const number = Math.floor(Math.random() * 3)
        return number
    }

    return { 
        get start() { return start },
        get computer() { return computer },
        setHuman,
        setComputer,
        humanOpponent, 
        computerOpponent,
        takeTurn
    }
})();