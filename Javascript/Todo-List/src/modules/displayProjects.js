import { projects } from './projectFactory'
import { showProjectForm } from './projectForm'

function projectCard(project) {
    const container = document.createElement('div')
    container.classList.add('project-card')

    const title = document.createElement('p')
    title.classList.add('project-title')
    title.textContent = `${project.name}`
    
    const description = document.createElement('p')
    description.textContent = `${project.description}`
    
    container.appendChild(title)
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

export { projectCard, displayProjects }