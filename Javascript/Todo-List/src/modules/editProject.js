import { currentProject, changeProjectStorage, projects } from './storage'

function editProjectForm(projectID) {
    const form = document.createElement('form')
    form.classList.add('project-form-edit')
    form.id = `${projectID}`

    const listContainer = document.createElement('ul')

    const listTitle = document.createElement('li')
    const title = document.createElement('input')
    title.classList.add('project-form-edit-title')
    title.required = true
    listTitle.appendChild(title)
    
    const listDescription = document.createElement('li')
    const description = document.createElement('input')
    description.classList.add('project-form-edit-description')
    description.required = true
    listDescription.appendChild(description)

    const buttonSection = document.createElement('li')
    const submitForm = document.createElement('button')
    const cancelForm = document.createElement('button')
    submitForm.type = 'submit'
    submitForm.textContent = 'Save'
    cancelForm.addEventListener('click', hideEditProject)
    cancelForm.textContent = 'Cancel'
    buttonSection.append(submitForm, cancelForm)

    form.addEventListener('submit', handleEditProjectSubmit)
    listContainer.append(listTitle, listDescription, buttonSection)
    form.appendChild(listContainer)

    return form
}

function showEditProject({target}) {
    const projectID = target.parentNode.id
    const projectIndex = projects.findIndex(project => project.id === projectID)
    const description = projects[projectIndex].description
    const main = document.getElementById('main')
    main.appendChild(editProjectForm(projectID))

    const titleSection = target.parentNode.querySelector('.project-title')

    const formTitle = document.querySelector('.project-form-edit-title')
    const formDescription = document.querySelector('.project-form-edit-description')

    formTitle.value = `${titleSection.textContent}`
    formDescription.value = `${description}`
}

function hideEditProject() {
    const editProject = document.querySelector('.project-form-edit')
    const main = document.getElementById('main')
    main.removeChild(editProject)
}

function handleEditProjectSubmit(e) {
    e.preventDefault()
    const { target } = e
    const title  = target[0].value
    const description = target[1].value

    const container = document.getElementById(`${target.id}`)
    const projectTitle = container.querySelector('.project-title')

    const notesTitle = document.getElementById('notes-title')
    const notesSub = document.getElementById('notes-sub')
    //const projectDescription = container.querySelector('.project-description')

    if (currentProject.id === target.id) { 
        notesTitle.textContent = `${title}`
        notesSub.textContent = `${description}` 
    }

    projectTitle.textContent = `${title}`
    

    changeProjectStorage(projectTitle, description, target.id)
    hideEditProject()
}

export { showEditProject }