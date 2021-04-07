const grid = document.getElementById('grid')
let documentFragment = document.createDocumentFragment()
let color = 'black'

const multi = document.getElementById('multi')
const shade = document.getElementById('shade')
const lighten = document.getElementById('lighten')
const black = document.getElementById('black')
const user = document.getElementById('user')

// add event listeners to select which color to 
// change grid squares

black.addEventListener('click', function(e) { setColor(e)} )
shade.addEventListener('click', function(e) { setColor(e)} )
lighten.addEventListener('click', function(e) { setColor(e)} )
multi.addEventListener('click', function(e) { setColor(e)} )
user.addEventListener('click', function(e) { setColor(e)} )

function setColor ({target}) {
    color = target.id
}

//choose random color for multicolor option

function randomColorPicker () {
    let round = Math.round,
        r = Math.random,
        a = round(r()*255),
        b = round(r()*255),
        c = round(r()*255), 
        d = Math.random() * (1 - 0.5) + 0.5
    return `rgba(${a}, ${b}, ${c}, ${d}`    
}

//using color input need to conver from hex to rgb

function hexConverter (hex) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b})`
} 

//when mousing over grid and coloring it in
//options of black, shading to black, rubbing out, random or user selection

function handleMouseover (e) {
    let colorValue = e.target.style.backgroundColor.split(',')
    switch(color) {
        case 'black':
            e.target.style.backgroundColor = 'rgb(0, 0, 0)'
            break;
        case 'shade':
            if(!e.target.style.backgroundColor) {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
            } else if (colorValue.length === 4) {
                let r = Number(colorValue[0].slice(5)) - 25.5,
                    g = Number(colorValue[1].slice(1)) - 25.5,
                    b = Number(colorValue[2].slice(1)) - 25.5,
                    a = Number((colorValue[3].slice(1,-1))) + 0.1
                e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`             
            } else {
                let r = Number(colorValue[0].slice(4)) -25.5,
                    g = Number(colorValue[1].slice(1)) -25.5,
                    b = Number(colorValue[2].slice(1, -1) -25.5)
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})` 
            }
            break;
        case 'lighten':
            if (colorValue.length === 4) {
                let r = Number(colorValue[0].slice(5)),
                    g = Number(colorValue[1].slice(1)),
                    b = Number(colorValue[2].slice(1)),
                    a = Number((colorValue[3].slice(1,-1))) - 0.1
                e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`             
            } else {
                let r = Number(colorValue[0].slice(4)),
                    g = Number(colorValue[1].slice(1)),
                    b = Number(colorValue[2].slice(1, -1))
                e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.9)` 
            }
            break;
        case 'multi':
            let randomColor = randomColorPicker()
            e.target.style.backgroundColor = randomColor
            break;
        case 'user':
            let userColor = user.value
            e.target.style.backgroundColor = hexConverter(userColor)
            break; 
    }
}

//make grid, start with 16 and allow up to 100 based on user input value

function createGrid (amount) {
    grid.innerHTML = ''
    const size = 600/amount
    for (let i = 0; i < amount*amount; i++) {
        let block = document.createElement('div')
        block.className = 'block'
        block.style.height = `${size}px`
        block.style.width = `${size}px`
        block.addEventListener('mouseover', function(e) {
            handleMouseover(e)
        })
        documentFragment.appendChild(block)
    }
    grid.appendChild(documentFragment)
}

let size = 16
const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', function() {
    createGrid(size)
})

const resizeBtn = document.getElementById('resize')
const inputNumber = document.getElementById('inputNumber')

resizeBtn.addEventListener('click', function() {
    let newSize = inputNumber.value
    createGrid(newSize)
    size = newSize
})

createGrid(size)
