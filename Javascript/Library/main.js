let myLibrary = [];

function Book(title, author, length, read) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${length} pages. ${read}.`
    }
}

function addBookToLibrary(input) {
    myLibrary.unshift(input)
}

const Ulysses = new Book('Ulysses', 'James Joyce', '734', 'Read')

console.log(Ulysses.info())