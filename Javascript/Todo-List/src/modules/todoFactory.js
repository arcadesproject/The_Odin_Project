import createID from './createID'
import { currentProject } from './switchProject'

const todoFactory = (name, description, dueDate, priority) => {
    const id = createID('note')
    return { name, description, dueDate, priority, id }
}

function addTodo(todo, project) {
    project.list.unshift(todo)
}

const testNote = todoFactory('Test', 'Just a test', 25, 'low')
addTodo(testNote, currentProject)

export { todoFactory, addTodo }