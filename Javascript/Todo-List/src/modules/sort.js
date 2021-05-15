import { currentProject, populateStorage, projects } from './storage'
import { clearNotes } from './switchProject'
import { displayTodos } from './displayTodos'

function sortByTitle() {
    currentProject.list.sort(function(a,b) {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }

        return 0
    })
    changeDisplay()
}

function sortByTitleReverse() {
    currentProject.list.sort(function(a,b) {
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if (nameA < nameB) {
            return 1
        }
        if (nameA > nameB) {
            return -1
        }

        return 0
    })
    changeDisplay()
}

function changeDisplay() {
    const notesContainer = document.getElementById('notes-container')
    clearNotes(notesContainer)
    const main = document.getElementById('main')
    main.removeChild(main.lastChild)
    const notesSection = displayTodos(currentProject)
    main.appendChild(notesSection)
    const projIndex = projects.findIndex(project => currentProject.id === project.id)
    projects.splice(projIndex, 1, currentProject)
    populateStorage()
}

export { sortByTitle, sortByTitleReverse }