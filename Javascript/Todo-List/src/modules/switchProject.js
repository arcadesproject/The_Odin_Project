import { projects, currentProject } from './storage'
import { todoCard } from './displayTodos'

function switchProject(project) {
    currentProject = project
}

function switchProjectDisplay({target}) {
    console.log(target)
    const project = projects.find(project => project.id === target.id)
    const notesContainer = document.getElementById('notes-container')
    clearNotes(notesContainer)
    project.list.forEach(todo => {
        const card = todoCard(todo)
        notesContainer.appendChild(card)
    })
    switchProject(project)
}

function clearNotes(notesContainer) {
    notesContainer.innerHTML = ''
}

export { switchProject, switchProjectDisplay }