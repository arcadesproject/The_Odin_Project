import { currentProject } from "./switchProject"
import { addTodo, todoFactory } from "./todoFactory"
import { todoCard } from './displayTodos'

function noteForm() {
    const form = document.createElement('form')
    form.id = 'note-form'
    form.style.display = 'none'

    const listContainer = document.createElement('ul')

    const listTitle = document.createElement('li')
    const title = document.createElement('input')
    listTitle.appendChild(title)
    
    const listDescription = document.createElement('li')
    const description = document.createElement('input')
    listDescription.appendChild(description)

    const listDate = document.createElement('li')
    const dueDate = document.createElement('input')
    listDate.appendChild(dueDate)

    const listPriority = document.createElement('li')
    const priority = document.createElement('input')
    listPriority.appendChild(priority)

    const buttonSection = document.createElement('li')
    const submitForm = document.createElement('button')
    const cancelForm = document.createElement('button')
    submitForm.type = 'submit'
    submitForm.textContent = 'Submit'
    cancelForm.addEventListener('click', hideNoteForm)
    cancelForm.textContent = 'Cancel'
    buttonSection.append(submitForm, cancelForm)

    form.addEventListener('submit', handleNoteSubmit)
    listContainer.append(listTitle, listDescription, listDate, listPriority, buttonSection)
    form.appendChild(listContainer)

    return form
}

function handleNoteSubmit(e) {
    e.preventDefault()
    const { target } = e
    const title  = target[0].value
    const description = target[1].value
    const dueDate = target[2].value
    const priority = target[3].value
    const note = todoFactory(title, description, dueDate, priority)
    addTodo(note, currentProject)
    const noteCard = todoCard(note)
    const notesContainer = document.getElementById('notes-container')
    notesContainer.prepend(noteCard)
    hideNoteForm()

}

function showNoteForm() {
    const form = document.getElementById('note-form')
    form.style.display = 'flex'
}

function hideNoteForm() {
    const form = document.getElementById('note-form')
    form.style.display = 'none'
    resetForm(form)
}

function resetForm(form) {
    form.reset()
}

export { noteForm, showNoteForm, hideNoteForm }