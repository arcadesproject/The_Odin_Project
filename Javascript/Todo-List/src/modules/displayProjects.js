import { projects } from './storage'
import { showProjectForm } from './projectForm'
import { switchProjectDisplay } from './switchProject'

function projectCard(project) {
    const container = document.createElement('div')
    container.classList.add('project-card')

    const title = document.createElement('p')
    title.classList.add('project-title')
    title.textContent = `${project.name}`
    title.id = `${project.id}`
    title.addEventListener('click', switchProjectDisplay)
    
    const description = document.createElement('p')
    description.textContent = `${project.description}`

    const removeButton = document.createElement('button')
    removeButton.textContent = 'del'
    removeButton.id = `${project.id}`
    removeButton.addEventListener('click', removeProject)
    
    container.append(title, removeButton)
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

    projects.forEach(project => {
        const card = projectCard(project)
        projectsList.appendChild(card)
    })

    return projectsContainer
}

function removeProject({target}) {
    const { id } = target
    const projectIndex = projects.findIndex(project => project.id === id)
    projects.splice(projectIndex, 1)
    target.parentNode.parentNode.removeChild(target.parentNode)

    // const notesContainer = document.getElementById('notes-container')
    // projects.length > 1 ? switchProjectDisplay(projects[0]) : notesContainer.textContent = ''
}


export { projectCard, displayProjects }