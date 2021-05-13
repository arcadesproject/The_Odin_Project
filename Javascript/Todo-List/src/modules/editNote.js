import { currentProject, projects, changeNoteStorage } from './storage'

function editNoteForm(noteID) {
    const form = document.createElement('form')
    form.classList.add('note-form-edit')
    form.id = `${noteID}`

    const listContainer = document.createElement('ul')

    const listTitle = document.createElement('li')
    const title = document.createElement('input')
    title.classList.add('note-form-edit-title')
    title.required = true
    listTitle.appendChild(title)
    
    const listDescription = document.createElement('li')
    const description = document.createElement('input')
    description.classList.add('note-form-edit-description')
    description.required = true
    listDescription.appendChild(description)

    const listDate = document.createElement('li')
    const dueDate = document.createElement('input')
    dueDate.classList.add('note-form-edit-date')
    dueDate.required = true
    listDate.appendChild(dueDate)

    const listPriority = document.createElement('li')
    const priority = document.createElement('input')
    priority.classList.add('note-form-edit-priority')
    priority.required = true
    listPriority.appendChild(priority)

    const buttonSection = document.createElement('li')
    const submitForm = document.createElement('button')
    const cancelForm = document.createElement('button')
    submitForm.type = 'submit'
    submitForm.textContent = 'Save'
    cancelForm.addEventListener('click', hideEditNote)
    cancelForm.textContent = 'Cancel'
    buttonSection.append(submitForm, cancelForm)

    form.addEventListener('submit', handleEditNoteSubmit)
    listContainer.append(listTitle, listDescription, listDate, listPriority, buttonSection)
    form.appendChild(listContainer)

    return form
}

function showEditNote({target}) {
    const noteID = target.parentNode.id
    const main = document.getElementById('main')
    main.appendChild(editNoteForm(noteID))

    const titleSection = target.parentNode.querySelector('.note-title')
    const descriptionSection = target.parentNode.querySelector('.note-description')
    const dateSection = target.parentNode.querySelector('.note-date')
    const prioritySection = target.parentNode.querySelector('.note-priority')

    const formTitle = document.querySelector('.note-form-edit-title')
    const formDescription = document.querySelector('.note-form-edit-description')
    const formDate = document.querySelector('.note-form-edit-date')
    const formPriority = document.querySelector('.note-form-edit-priority')

    formTitle.value = `${titleSection.textContent}`
    formDescription.value = `${descriptionSection.textContent}`
    formDate.value = `${dateSection.textContent}`
    formPriority.value = `${prioritySection.textContent}`
}

function hideEditNote() {
    const editForm = document.querySelector('.note-form-edit')
    const main = document.getElementById('main')
    main.removeChild(editForm)
}

function handleEditNoteSubmit(e) {
    e.preventDefault()
    const { target } = e
    const title  = target[0].value
    const description = target[1].value
    const dueDate = target[2].value
    const priority = target[3].value

    const container = document.getElementById(`${target.id}`)
    const noteTitle = container.querySelector('.note-title')
    const noteDescription = container.querySelector('.note-description')
    const noteDate = container.querySelector('.note-date')
    const notePriority = container.querySelector('.note-priority')

    noteTitle.textContent = `${title}`
    noteDescription.textContent = `${description}`
    noteDate.textContent = `${dueDate}`
    notePriority.textContent = `${priority}`

    changeNoteStorage(noteTitle, noteDescription, noteDate, notePriority, target.id)
    hideEditNote()
}

export { showEditNote }