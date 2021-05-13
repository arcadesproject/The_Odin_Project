import createID from './createID'

const todoFactory = (name, description, dueDate, priority) => {
    const id = createID('note')
    return { name, description, dueDate, priority, id }
}

function addTodo(todo, project) {
    project.list.unshift(todo)
}

export { todoFactory, addTodo }