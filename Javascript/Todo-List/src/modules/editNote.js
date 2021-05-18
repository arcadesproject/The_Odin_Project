import { currentProject, projects, changeNoteStorage } from './storage'

function editNoteForm(noteID) {
    const form = document.createElement('form')
    form.classList.add('note-form-edit')
    form.id = `${noteID}`

    const listContainer = document.createElement('ul')

    const listTitle = document.createElement('li')
    const titleLabel = document.createElement('label')
    titleLabel.textContent = 'Name: '
    const title = document.createElement('input')
    title.classList.add('note-form-edit-title')
    title.maxLength = '30'
    title.required = true
    listTitle.append(titleLabel, title)
    
    const listDescription = document.createElement('li')
    const descLabel = document.createElement('label')
    descLabel.textContent = 'Description: '
    const description = document.createElement('textarea')
    description.classList.add('note-form-edit-description')
    description.required = true
    listDescription.append(descLabel, description)

    const listDate = document.createElement('li')
    const dueLabel = document.createElement('label')
    dueLabel.textContent = 'Date Due: '
    const dueDate = document.createElement('input')
    dueDate.type = 'date'
    dueDate.classList.add('note-form-edit-date')
    dueDate.required = true
    listDate.append(dueLabel, dueDate)

    const listPriority = document.createElement('li')
    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Priority: '
    const priority = document.createElement('select')
    priority.classList.add('note-form-edit-priority')
    priority.required = true
    listPriority.append(priorityLabel, priority)
    const high = document.createElement('option')
    const medium = document.createElement('option')
    const low = document.createElement('option')
    high.value = '3'
    medium.value = '2'
    low.value = '1'
    high.textContent = 'High'
    medium.textContent = 'Medium'
    low.textContent = 'Low'
    priority.append(high, medium, low)

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
    const dateSection = target.parentNode.querySelector('.note-date')
    const prioritySection = target.parentNode.querySelector('.note-priority')
    const descriptionSection = target.parentNode.querySelector('.note-description')

    const formTitle = document.querySelector('.note-form-edit-title')
    const formDate = document.querySelector('.note-form-edit-date')
    const formPriority = document.querySelector('.note-form-edit-priority')
    const formDescription = document.querySelector('.note-form-edit-description')

    formTitle.value = `${titleSection.textContent}`
    formDate.value = `${dateSection.textContent}`
    formDescription.value = `${descriptionSection.textContent}`

    switch (prioritySection.classList[0]) {
        case 'high':
            formPriority[0].selected = 'selected'
            break;
        case 'medium':
            formPriority[1].selected = 'selected'
            break;
        case 'low':
            formPriority[2].selected = 'selected'
            break;
    }
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