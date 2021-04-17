let storedNumber = 0
let displayValue = ''
let operator = ''
let operatorPressed = false
let numberSet = false
const display = document.getElementById('display')
const previous = document.getElementById('previous')
const operators = document.getElementById('operators')
const operatorsArray = Array.from(operators.children)
operatorsArray.forEach(operator => operator.addEventListener('click', function(e) {
    operatorHandler(e)
}))
const numbers = document.getElementById('numbers')
const numbersArray = Array.from(numbers.children)
numbersArray.forEach(number => number.addEventListener('click', function(e) {
    numberHandler(e)
}))
const sum = document.getElementById('equals')
sum.addEventListener('click', sumHandler)
const clear = document.getElementById('clear')
clear.addEventListener('click', clearHandler)
const decimal = document.getElementById('decimal')
decimal.addEventListener('click', decimalHandler)

function operate (a, b, operator) {
    let c = Number(a),
        d = Number(b),
        newNum
    switch (operator) {
        case '+':
            newNum =  c + d;
            break;
        case '−':
            newNum =  c - d;
            break;
        case '×':
            newNum =  c * d;
            break;
        case '÷':
            newNum =  c / d;
            break;
    }
    
    newNum = Number(newNum.toFixed(10))
    if (newNum > 1000000000) {
        return newNum.toExponential(9)
    } else {
        return newNum
    }
}

function operatorHandler (e) {
    let newOperator = e.target.id
    if (displayValue === '') { return }
    if (operator == '÷' && displayValue == '0') { 
        clearHandler()
        display.textContent = `Cheeky`
        return
    }
    if (!numberSet) {
        operator = newOperator
        operatorPressed = true
    } else {
        previous.innerHTML = `${storedNumber} ${operator} ${displayValue} =`
        displayValue = operate(storedNumber, displayValue, operator)
        operator = newOperator
        numberSet = false
        operatorPressed = true
    }
    display.innerHTML = `${displayValue} ${operator}`
}

function setOperator(operator) {
    switch(operator) {
        case 'add':
            return '&plus;'
        case 'subtract':
            return '&minus;'
        case 'multiply':
            return '&times;'
        case 'divide':
            return '&divide;'
    }
}

function numberHandler (e) {
    let number = e.target.id
    if (displayValue === '' || display.textContent === 'Cheeky') {
        displayValue = number
        display.innerHTML = displayValue  
    } else if (numberSet) {
        displayValue = `${displayValue}${number}`
        display.innerHTML = `${storedNumber} ${operator} ${displayValue}`
    } else if (!operatorPressed) {
        displayValue = `${displayValue}${number}`
        display.innerHTML = displayValue  
    } else {
        storedNumber = displayValue
        numberSet = true
        displayValue = number
        display.innerHTML = `${storedNumber} ${operator} ${displayValue}`
    }
    operatorPressed = false
}

function sumHandler () {
    if (operator === '' || numberSet === false) { return }
    if (operator == '÷' && displayValue == '0') { 
        clearHandler()
        display.textContent = `Cheeky`
        return
    }
    previous.innerHTML = `${storedNumber} ${operator} ${displayValue} =`
    displayValue = operate(storedNumber, displayValue, operator)
    display.innerHTML = `${displayValue}`
    numberSet = false
    operatorPressed = false
    operator = ''
}

function clearHandler () {
    storedNumber = 0
    displayValue = ''
    operator = ''
    operatorPressed = false
    numberSet = false
    display.innerHTML = ''
    previous.innerHTML = ''
}

function decimalHandler () {
    let string = `${displayValue}`
    if (string.includes('.')) { return }
    if (displayValue === '' || display.textContent === 'Cheeky') {
        displayValue = '0.'
        display.innerHTML = displayValue
    } else if (numberSet) {
        displayValue = `${displayValue}.`
        display.innerHTML = `${storedNumber} ${operator} ${displayValue}`
    } else if (!operatorPressed) {
        displayValue = `${displayValue}.`
        display.innerHTML = `${displayValue}`
    } else {
        storedNumber = displayValue
        numberSet = true
        displayValue = '0.'
        display.innerHTML = `${storedNumber} ${operator} ${displayValue}`
    }
    operatorPressed = false
}