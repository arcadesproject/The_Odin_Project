import { projects, currentProject, populateStorage } from './storage'
import { displayTodos } from './displayTodos'

function switchProject(project) {
    currentProject = project
    
}

function switchProjectDisplay({target}) {
    const project = projects.find(project => project.id === target.parentNode.id)
    //////////////////////////////////
    if (project.id === currentProject.id) { 
        return 
    }
    switchProject(project)
    const notesContainer = document.getElementById('notes-container')
    ///////////////////////////////
    clearNotes(notesContainer)
    const main = document.getElementById('main')
    main.removeChild(main.lastChild)
    const notesSection = displayTodos(project)
    main.appendChild(notesSection)
    populateStorage()
    console.log(main)
}

function clearNotes(notesContainer) {
    notesContainer.innerHTML = ''
}

export { switchProject, switchProjectDisplay, clearNotes }