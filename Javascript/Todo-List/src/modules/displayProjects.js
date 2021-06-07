import { projects, currentProject, populateStorage } from './storage'
import { showProjectForm } from './projectForm'
import { switchProjectDisplay } from './switchProject'
import { todoCard, displayTodos } from './displayTodos'
import { showEditProject } from './editProject'

function projectCard(project) {
    const container = document.createElement('div')
    container.classList.add('project-card')
    container.id = `${project.id}`
    container.addEventListener('click', switchProjectDisplay)

    const title = document.createElement('p')
    title.classList.add('project-title')
    title.textContent = `${project.name}`
    
    
    const description = document.createElement('p')
    description.textContent = `${project.description}`
    description.classList.add('project-description')

    const buttons = document.createElement('div')

    const editButton = document.createElement('button')
    editButton.textContent = 'edit'
    editButton.addEventListener('click', showEditProject)
    editButton.classList.add('edit-project')

    const removeButton = document.createElement('button')
    removeButton.textContent = 'del'
    removeButton.id = `${project.id}`
    removeButton.addEventListener('click', removeProject)
    
    buttons.append(editButton, removeButton)
    container.append(title, buttons)
    return container
}

function displayProjects() {
    const projectsContainer = document.createElement('div')
    projectsContainer.id = 'projects'

    const projectsHeader = document.createElement('div')
    
    const projectsTitle = document.createElement('h2')
    projectsTitle.textContent = 'Projects'

    const projectsButton = document.createElement('button')
    projectsButton.textContent = 'Add'
    projectsButton.addEventListener('click', showProjectForm)

    const projectsList = document.createElement('section')
    projectsList.id = 'project-container'
    
    projectsHeader.append(projectsTitle, projectsButton)

    projectsContainer.append(projectsHeader, projectsList)

    const tempList = projects
    tempList.forEach(project => {
        const card = projectCard(project)
        projectsList.appendChild(card)
    })

    return projectsContainer
}

function removeProject({target}) {
    const { id } = target.parentNode.parentNode
    const projectIndex = projects.findIndex(project => project.id === id)
    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
    
    ////////////////////////////////////////////
    if (!currentProject) {
        projects.splice(projectIndex, 1)
        populateStorage()
        return
    }

    if (projects[projectIndex].id === currentProject.id) {
        projects.splice(projectIndex, 1)
        const notesContainer = document.getElementById('notes-container')
        const notesHeader = document.getElementById('notes-header')
        notesContainer.innerHTML = ''
        notesHeader.innerHTML = ''
        if (projects.length > 0) {
            currentProject = projects[0]
            // const tempList = currentProject.list
            // if (tempList.length > 0 ) {
            //     tempList.forEach(todo => {
            //     const card = todoCard(todo)
            //     notesContainer.appendChild(card)
            //     })
            // }
            const notesSection = displayTodos(currentProject)
            const main = document.getElementById('main')
            main.removeChild(main.lastChild)
            main.appendChild(notesSection)
        } else {
            //////////////////////////////////
            currentProject = ''
            const notesHeader = document.getElementById('notes-header')
            notesHeader.innerHTML = ''
            console.log('test')
            /// when refresh the page and there is an empty project/ no project
        } 
    } else {
        projects.splice(projectIndex, 1)
    }
    populateStorage()
}

export { projectCard, displayProjects }