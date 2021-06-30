import { addProject } from "./projectFactory"
import { projectCard } from './displayProjects'
import { populateStorage } from './storage'
import { blur, noBlur } from './blur'

function projectForm() {
    const form = document.createElement('form')
    form.id = 'project-form'

    const listContainer = document.createElement('ul')

    const listTitle = document.createElement('li')
    const titleLabel = document.createElement('label')
    titleLabel.textContent = 'Name: '
    const title = document.createElement('input')
    title.maxLength = '30'
    title.required = true
    listTitle.append(titleLabel, title)
    
    const listDescription = document.createElement('li')
    const descLabel = document.createElement('label')
    descLabel.textContent = 'Description: '
    const description = document.createElement('textarea')
    description.required = true
    listDescription.append(descLabel, description)

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
    const projectsList = document.getElementById('project-container')
    projectsList.prepend(projectBlock)
    hideProjectForm()
    populateStorage()
}

function showProjectForm() {
    const main = document.getElementById('main')
    main.appendChild(projectForm())
    blur()
}

function hideProjectForm() {
    const projectForm = document.getElementById('project-form')
    const main = document.getElementById('main')
    main.removeChild(projectForm)
    noBlur()
}

export { projectForm, showProjectForm, hideProjectForm }