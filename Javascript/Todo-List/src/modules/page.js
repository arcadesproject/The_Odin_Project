import { displayProjects } from './displayProjects'
import { displayTodos } from './displayTodos'
import { noteForm } from './noteForm'
import { projectForm } from './projectForm'
import { projects, currentProject, getLocalStorage } from './storage'
import { switchProject } from './switchProject'
import { addTodo, todoFactory } from './todoFactory'

switchProject(projects[0])
const testNote = todoFactory('Test', 'Just a test', 25, 'low')
addTodo(testNote, currentProject)

getLocalStorage()

function createHeader() {
    const header = document.createElement('header')
    const title = document.createElement('h1')
    title.textContent = 'Todo-List'
    header.appendChild(title)
    return header
}

function createMain() {
    const main = document.createElement('section')
    main.id = 'main'
    main.append(displayProjects(), displayTodos(currentProject))
    return main
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.textContent = 'footer'
    return footer
}

function page() {
    const content = document.getElementById('content')
    content.append(createHeader(), createMain(), createFooter(), noteForm(), projectForm())
}

export default page