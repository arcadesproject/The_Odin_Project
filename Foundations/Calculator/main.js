let operatorSet = false,
	numberSet = false,
	sumSet = false,
	storage = '',
	value = '',
	operator = '',
	ans = ''

const display = document.getElementById('display'),
	previous = document.getElementById('previous'),
	operators = document.getElementsByClassName('operator')
	operatorsArray = Array.from(operators),
	numbers = document.getElementsByClassName('number'),
	numbersArray = Array.from(numbers),
	sum = document.getElementById('equals'),
	clear = document.getElementById('clear'),
	decimal = document.getElementById('decimal'),
	backspace = document.getElementById('delete'),
	clearCurrent = document.getElementById('clearCurrent'),
	sign = document.getElementById('sign'),
	answer = document.getElementById('ans'),
	percent = document.getElementById('percentage'),
	fraction = document.getElementById('fraction'),
	sqrt = document.getElementById('sqrt')
	exponent = document.getElementById('^')

operatorsArray.forEach(operator => operator.addEventListener('click', function(e) {
    operatorHandler(e)
}))
numbersArray.forEach(number => number.addEventListener('click', function(e) {
    numberHandler(e)
}))
sum.addEventListener('click', sumHandler)
clear.addEventListener('click', clearHandler)
decimal.addEventListener('click', decimalHandler)
backspace.addEventListener('click', backspaceHandler)
sign.addEventListener('click', signHandler)
answer.addEventListener('click', answerHandler)
clearCurrent.addEventListener('click', clearCurrentHandler)
percent.addEventListener('click', percentageHandler)
fraction.addEventListener('click', fractionHandler)
sqrt.addEventListener('click', sqrtHandler)
exponent.addEventListener('click', function(e) {
    operatorHandler(e)
})

function operate (operator, a, b) {
	a = Number(a)
	b = Number(b)
	let c
	    switch (operator) {
        case '+':
        	c = a + b;
            break;
        case '−':
            c = a - b;
            break;
        case '×':
            c = a * b;
            break;
        case '÷':
            c = a / b;
            break;
		case '^':
			c = Math.pow(a, b)
			break;
    }
	c = Number(c.toFixed(10))
	return c > 1000000000 ? c.toExponential(9) : c
}

function operatorHandler (input) {
	const currentOperator = input.target.id
	if (checkDivideZero(currentOperator)) { return }
	
	if (operatorSet) {
		previous.innerHTML = `${storage} ${currentOperator}`
		value = ''
	} else if (display.innerHTML === '') { 
		return 
	} else if (sumSet) {
		storage = ans
		previous.innerHTML = `${storage} ${currentOperator}`
		display.textContent = ''
		sumSet = false
		numberSet = true
		value = ''
	} else if (!numberSet) {	
		previous.innerHTML = `${value} ${currentOperator}`
		display.innerHTML = ''
		storage = value
		value = ''
		numberSet = true
	} else {
		value = operate(operator, storage, value)
		previous.innerHTML = `${value} ${currentOperator}`
		display.innerHTML = ``
		storage = value
		value = ''
	}
	operatorSet = true
	operator = currentOperator
}

function numberHandler (input) {
	const currentNumber = input.target.id
	if (currentNumber === '0' && value === '') { return }

	if (operatorSet) {
			value = currentNumber
			previous.innerHTML = `${storage} ${operator}`
			display.innerHTML = `${value}`
	} else if (sumSet) {
		value = currentNumber
		storage = ans
		previous.innerHTML = `Ans = ${ans}`
		display.innerHTML = `${value}`
		sumSet = false
	} else {
		value = `${value}${currentNumber}`
		display.innerHTML = `${value}`
	}
	operatorSet = false
}

function sumHandler () {
	if (checkDivideZero(value)) { return }
	if (!operatorSet && storage !== '') {
		let result = operate(operator, storage, value)
		previous.innerHTML = `${storage} ${operator} ${value} =`
		display.innerHTML = `${result}`
		value = result
		ans = result
		sumSet = true
		storage = ''
		numberSet = false
	}
}

function clearHandler () {
	operatorSet = false
	numberSet = false
	sumSet = false
	operator = ''
	value = ''
	storage = ''
	previous.textContent = ''
	display.textContent = ''
}

function decimalHandler () {
	let string = `${value}`
	if (string.includes('.')) { return }

	if (sumSet) {
		previous.innerHTML = `Ans = ${ans}`
		value = '0.'
        display.innerHTML = `${value}`
		sumSet = false
		storage = ans
	} else if (value === '' || display.textContent === 'Cheeky') {
		value = '0.'
        display.innerHTML = value
	} else if (numberSet) {
        value = `${value}.`
        display.innerHTML = `${value}`
    } else if (!operatorSet) {
        value = `${value}.`
        display.innerHTML = `${value}`
    } else {
        storage = value
        numberSet = true
        value = '0.'
        display.innerHTML = `${storagee} ${operator} ${value}`
    }
    operatorSet = false
}

function backspaceHandler () {
	let temp = `${value}`.split('')
	temp.pop()
	temp = temp.join('')
	value = temp
	display.innerHTML = `${value}`
	sumSet = false
}

function clearCurrentHandler () {
	sumSet = false
	value = ''
	display.innerHTML = ''
}

function signHandler () {
	let temp = `${value}`.split('')
    if (value === '0') { return }
	if (temp[0] === '-') { 
		temp.shift()
		temp = temp.join('')
		value = `${temp}`
	} else {
		temp = temp.join('')
		value = `-${temp}`
	}
	display.innerHTML = `${value}`
}

function answerHandler () {
	if (ans !== '') {
		value = ans
		display.innerHTML = `${ans}`
		operatorSet = false
	}
}

function percentageHandler () {
	if (value === '') { return }
	let temp = operate('÷', value, 100)
	if (numberSet) {
		value = temp
		display.innerHTML = `${value}`
	} else {
		previous.innerHTML = `${value} / 100 =`
		value = temp
		display.innerHTML = `${value}`
	}
}

function fractionHandler () {
	if (value === '') { return }
	let temp = operate('÷', 1, value)
	if (numberSet) {
		value = temp
		display.innerHTML = `${value}`
	} else {
		previous.innerHTML = `1 / ${value} =`
		value = temp
		display.innerHTML = `${value}`
	}
}

function sqrtHandler () {
	if (value === '') { return }
	let temp = Math.sqrt(value)
	if (numberSet) {
		value = temp
		display.innerHTML = `${value}`
	} else {
		previous.innerHTML = `&radic;${value} =`
		value = temp
		display.innerHTML = `${value}`
	}
}

function checkDivideZero (input) {
	if (input === '÷' && value == '0') { 
		clearHandler()
		display.textContent = 'Cheeky'
		return true 
	} 
}

function checkEmpty () {
	if (value === '') { return true }
}