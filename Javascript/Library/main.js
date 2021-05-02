// function Book(title, author, length, read) {
//     this.title = title
//     this.author = author
//     this.length = length
//     this.read = read
//     this.id = uniqueID()
// }

class Book {
    constructor(title, author, length, read) {
        this.title = title
        this.author = author
        this.length = length
        this.read = read
        this.id = uniqueID()
    }
}

function addBookToLibrary(input) {
    myLibrary.push(input)
    populateStorage()
}

function displayBooks(library) {
    let tempArray = [...library]
    const cards = document.getElementById('cards')
    tempArray.forEach(e => {
        let card = createCard(e)
        cards.prepend(card)
    })
}

function createCard (e) {
    let card = document.createElement('div')
    card.className = 'card-container'
    card.id = e.id
    let title = document.createElement('div')
    title.innerHTML = `<span class="title">${e.title}</span>`
    let author = document.createElement('div')
    author.innerHTML = `<span class="author">by ${e.author}</span>`
    let length = document.createElement('div')
    length.innerHTML = `<span class="length">${e.length} pages</span>`
    let remove = document.createElement('button')
    remove.addEventListener('click', removeBook)
    remove.textContent = 'X'
    remove.className = 'remove'
    let read = document.createElement('button')
    read.addEventListener('click', toggleRead)
    read.className = 'read'
    e.read ? read.textContent = 'Read'
            : read.textContent = 'Not Read' 
    e.read ? read.style.backgroundColor = 'rgb(12, 158, 12)'
            : read.style.backgroundColor = 'rgb(214, 75, 75)'
    card.append(remove, title, author, length, read)
    return card
}

function removeBook({target}) {
    const item = target.parentNode.id,
          index = myLibrary.findIndex(element => element.id === item)
    myLibrary.splice(index, 1)
    target.parentNode.parentNode.removeChild(target.parentNode)
    populateStorage()
}

function toggleRead({target}) {
    const item = target.parentNode.id
    const index = myLibrary.find(element => element.id === item)
    index.read ? target.textContent = 'Not Read' 
        : target.textContent = 'Read'
    index.read ? target.style.backgroundColor = 'rgb(214, 75, 75)'
        : target.style.backgroundColor = 'rgb(12, 158, 12)'
    index.read = !index.read   
    populateStorage()
}

function uniqueID () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const form = document.getElementById('add-book')
const newBookButton = document.getElementById('new')
newBookButton.addEventListener('click', function() {
    form.style.display = 'flex'
})
const closeForm = document.getElementById('close')
closeForm.addEventListener('click', function(event) {
    event.preventDefault()
    form.style.display = 'none'
    form.reset()
})
const submitBook = document.getElementById('add-book')
submitBook.addEventListener('submit', function(event) {
    event.preventDefault()
    const title = document.getElementById('title'),
        author = document.getElementById('author'),
        pages = document.getElementById('pages'),
        read = document.getElementById('read')
    const book = new Book(`${title.value}`, `${author.value}`, `${pages.value}`, read.checked)
    addBookToLibrary(book)
    const card = createCard(book)
    const cards = document.getElementById('cards')
    cards.prepend(card)
    form.style.display = 'none'
    form.reset()
})

const Ulysses = new Book('Ulysses', 'James Joyce', 734, false)
const TheThirdPoliceman = new Book('The Third Policeman', 'Flann O\'Brien', 212, true)
const Molloy = new Book('Molloy', 'Samuel Beckett', 256, true)
let myLibrary = [Ulysses, TheThirdPoliceman, Molloy];



function getLocalStorage() {
    if(!localStorage.getItem('library')) {
        populateStorage()
    } else {
        setLibrary()
    }
}

function setLibrary() {
    myLibrary = JSON.parse(localStorage.getItem('library'))
}

function populateStorage() {
    localStorage.setItem('library', JSON.stringify(myLibrary))
    setLibrary()
}

getLocalStorage();
displayBooks(myLibrary)