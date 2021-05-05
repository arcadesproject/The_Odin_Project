// import currentProject from './switchProject'

function todoCard(todo) {
    console.log(todo)
    const container = document.createElement('div')
    container.classList.add('todo-card')

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
    todosContainer.textContent = 'Notes test'
    
    project.list.forEach(todo => {
        const card = todoCard(todo)
        todosContainer.appendChild(card)
    })

    //console.log(todosContainer)
    return todosContainer
}

export default displayTodos