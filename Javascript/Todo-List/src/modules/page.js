import displayProjects from './displayProjects'
import displayTodos from './displayTodos'
import { currentProject } from './switchProject'
import { todoFactory, addTodo } from './todoFactory'

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
    content.append(createHeader(), createMain(), createFooter())
}

export default page