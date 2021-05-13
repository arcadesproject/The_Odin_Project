import { projects, currentProject } from './storage'
import { todoCard, displayTodos } from './displayTodos'

function switchProject(project) {
    currentProject = project
}

function switchProjectDisplay({target}) {
    const project = projects.find(project => project.id === target.parentNode.id)
    const notesContainer = document.getElementById('notes-container')
    clearNotes(notesContainer)
    const tempList = project.list
    tempList.forEach(todo => {
        const card = todoCard(todo)
        notesContainer.appendChild(card)
    })
    switchProject(project)
    const main = document.getElementById('main')
    main.removeChild(main.lastChild)
    const notesSection = displayTodos(project)
    main.appendChild(notesSection)
}

function clearNotes(notesContainer) {
    notesContainer.innerHTML = ''
}

export { switchProject, switchProjectDisplay }