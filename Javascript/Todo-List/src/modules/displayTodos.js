import { showNoteForm } from './noteForm'
import { showEditNote } from './editNote'
import { currentProject, projects } from './storage'

function todoCard(todo) {
    const container = document.createElement('div')
    container.classList.add('todo-card')
    container.id = todo.id

    const title = document.createElement('h3')
    title.textContent = `${todo.name}`
    title.classList.add('note-title')

    const description = document.createElement('p')
    description.textContent = `${todo.description}`
    description.classList.add('note-description')

    const dueDate = document.createElement('p')
    dueDate.textContent = `${todo.dueDate}`
    dueDate.classList.add('note-date')

    const priority = document.createElement('p')
    priority.textContent = `${todo.priority}`
    priority.classList.add('note-priority')

    const editButton = document.createElement('button')
    editButton.textContent = 'edit'
    editButton.addEventListener('click', showEditNote)
    editButton.classList.add('edit-note')

    const removeButton = document.createElement('button')
    removeButton.textContent = 'del'
    removeButton.addEventListener('click', removeTodo)
    removeButton.classList.add('remove-note')

    container.append(title, description, dueDate, priority, editButton, removeButton)
    return container
}

function displayTodos(project) {
    const todosContainer = document.createElement('div')
    todosContainer.id = 'notes'
    const todosHeader = document.createElement('div')
    todosHeader.id = 'notes-header'
    const todosTitle = document.createElement('h1')
    todosTitle.id = 'notes-title'
    const todosButton = document.createElement('button')
    todosButton.id = 'notes-button'
    const notesContainer = document.createElement('section')
    notesContainer.id = 'notes-container'

    todosButton.addEventListener('click', showNoteForm)
    todosButton.textContent = 'Add'
    todosHeader.append(todosTitle, todosButton)
    todosTitle.textContent = `${currentProject.name} notes`
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
}

export { todoCard, displayTodos }