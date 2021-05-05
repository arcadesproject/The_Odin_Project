import { projects } from './projectFactory'

function projectCard(project) {
    const container = document.createElement('div')
    container.classList.add('project-card')

    const title = document.createElement('p')
    title.classList.add('project-title')
    title.textContent = `${project.name}`
    
    container.appendChild(title)
    return container
}

function displayProjects() {
    const projectsContainer = document.createElement('div')
    projectsContainer.id = 'projects'
    
    const projectsTitle = document.createElement('h2')
    projectsTitle.textContent = 'Projects'

    const projectsList = document.createElement('section')
    
    projects.forEach(project => {
        const card = projectCard(project)
        projectsList.appendChild(card)
    })

    projectsContainer.append(projectsTitle, projectsList)
    return projectsContainer
}

export default displayProjects