import { showNoteForm } from './noteForm'
import { showEditNote } from './editNote'
import { currentProject } from './storage'
import { sortByTitle, sortByTitleReverse } from './sort'

function todoCard(todo) {
    const container = document.createElement('div')
    container.classList.add('todo-card')
    container.id = todo.id

    const title = document.createElement('h3')
    title.textContent = `${todo.name}`
    title.classList.add('note-title')

    const dueDate = document.createElement('p')
    dueDate.textContent = `${todo.dueDate}`
    dueDate.classList.add('note-date')

    const priority = document.createElement('p')
    priority.textContent = `${todo.priority}`
    priority.classList.add('note-priority')

    const description = document.createElement('p')
    description.textContent = `${todo.description}`
    description.classList.add('note-description')
    description.style.display = 'none'

    const expandButton = document.createElement('button')
    expandButton.textContent = '+'
    expandButton.addEventListener('click', showDescription)
    expandButton.classList.add('expand-note')
    expandButton.id = `${todo.description}`

    const editButton = document.createElement('button')
    editButton.textContent = 'edit'
    editButton.addEventListener('click', showEditNote)
    editButton.classList.add('edit-note')

    const removeButton = document.createElement('button')
    removeButton.textContent = 'del'
    removeButton.addEventListener('click', removeTodo)
    removeButton.classList.add('remove-note')

    container.append(title, dueDate, priority, description, expandButton, editButton, removeButton)
    return container
}

function displayTodos(project) {
    const todosContainer = document.createElement('div')
    todosContainer.id = 'notes'
    const todosHeader = document.createElement('div')
    todosHeader.id = 'notes-header'
    const todosTitle = document.createElement('h1')
    todosTitle.id = 'notes-title'
    const todosSub = document.createElement('p')
    todosSub.id = 'notes-sub'
    const titleSortButton = document.createElement('button')
    titleSortButton.id = 'notes-sort-title'
    const titleSortReverseButton = document.createElement('button')
    titleSortButton.id = 'notes-sort-title-reverse'
    const todosButton = document.createElement('button')
    todosButton.id = 'notes-button'
    const notesContainer = document.createElement('section')
    notesContainer.id = 'notes-container'

    titleSortButton.addEventListener('click', sortByTitle)
    titleSortButton.textContent = 'A-Z v'
    titleSortReverseButton.addEventListener('click', sortByTitleReverse)
    titleSortReverseButton.textContent = 'A-Z ^'
    todosButton.addEventListener('click', showNoteForm)
    todosButton.textContent = 'Add'
    todosHeader.append(todosTitle, todosSub, titleSortButton, titleSortReverseButton, todosButton)
    todosTitle.textContent = `${currentProject.name} notes`
    todosSub.textContent = `${currentProject.description}`
    todosContainer.append(todosHeader, notesContainer)

    const tempList = project.list
    tempList.forEach(todo => {
        const card = todoCard(todo)
        notesContainer.appendChild(card)
    })

    return todosContainer
}

function removeTodo({target}) {
    const { id } = target.parentNode
    const noteIndex = currentProject.list.findIndex(note => note.id === id)
    currentProject.list.splice(noteIndex, 1)
    target.parentNode.parentNode.removeChild(target.parentNode)
    populateStorage()
}

function showDescription({target}) {
    const description = target.parentNode.querySelector('.note-description')
    description.style.display = 'block'
    target.textContent = '-'
    target.removeEventListener('click', showDescription)
    target.addEventListener('click', hideDescription)
}

function hideDescription({target}) {
    target.parentNode.querySelector('.note-description').style.display = 'none'
    target.textContent = '+'
    target.removeEventListener('click', hideDescription)
    target.addEventListener('click', showDescription)
}

export { todoCard, displayTodos }