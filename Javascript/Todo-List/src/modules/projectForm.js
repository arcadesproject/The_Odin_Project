import { addProject } from "./projectFactory"
import { projectCard } from './displayProjects'
import { switchProjectDisplay } from "./switchProject"

function projectForm() {
    const form = document.createElement('form')
    form.id = 'project-form'
    form.style.display = 'none'

    const listContainer = document.createElement('ul')

    const listTitle = document.createElement('li')
    const title = document.createElement('input')
    title.required = true
    listTitle.appendChild(title)
    
    const listDescription = document.createElement('li')
    const description = document.createElement('input')
    description.required = true
    listDescription.appendChild(description)

    const buttonSection = document.createElement('li')
    const submitForm = document.createElement('button')
    const cancelForm = document.createElement('button')
    submitForm.type = 'submit'
    submitForm.textContent = 'Submit'
    cancelForm.addEventListener('click', hideProjectForm)
    cancelForm.textContent = 'Cancel'
    buttonSection.append(submitForm, cancelForm)

    form.addEventListener('submit', handleProjectSubmit)

    listContainer.append(listTitle, listDescription, buttonSection)

    form.appendChild(listContainer)
    return form
}

function handleProjectSubmit(e) {
    e.preventDefault()
    const { target } = e
    const title  = target[0].value
    const description = target[1].value
    const project = addProject(title, description)
    const projectBlock = projectCard(project)
    projectBlock.addEventListener('click', switchProjectDisplay)
    const projectsList = document.getElementById('project-container')
    projectsList.prepend(projectBlock)
    hideProjectForm()
}

function showProjectForm() {
    const form = document.getElementById('project-form')
    form.style.display = 'flex'
}

function hideProjectForm() {
    const form = document.getElementById('project-form')
    form.style.display = 'none'
    form.reset()
}

export { projectForm, showProjectForm, hideProjectForm }