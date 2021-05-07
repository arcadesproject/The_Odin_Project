import { showNoteForm } from './noteForm'

function todoCard(todo) {
    const container = document.createElement('div')
    container.classList.add('todo-card')
    container.id = todo.id

    const title = document.createElement('h3')
    title.textContent = `${todo.name}`

    const description = document.createElement('p')
    description.textContent = `${todo.description}`

    const dueDate = document.createElement('p')
    dueDate.textContent = `${todo.dueDate}`

    const priority = document.createElement('p')
    priority.textContent = `${todo.priority}`

    container.append(title, description, dueDate, priority)
    return container
}

function displayTodos(project) {
    const todosContainer = document.createElement('div')
    todosContainer.id = 'notes'
    const todosHeader = document.createElement('div')
    const todosTitle = document.createElement('h1')
    const todosButton = document.createElement('button')
    const notesContainer = document.createElement('section')
    notesContainer.id = 'notes-container'

    todosButton.addEventListener('click', showNoteForm)
    todosButton.textContent = 'Add'
    todosHeader.append(todosTitle, todosButton)
    todosTitle.textContent = 'Notes'
    todosContainer.append(todosHeader, notesContainer)
    
    project.list.forEach(todo => {
        const card = todoCard(todo)
        notesContainer.appendChild(card)
    })

    return todosContainer
}

export { todoCard, displayTodos }