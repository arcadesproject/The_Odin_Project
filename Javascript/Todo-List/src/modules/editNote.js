import { changeNoteStorage } from './storage';
import { blur, noBlur } from './blur';

function editNoteForm(noteID) {
  const form = document.createElement('form');
  form.classList.add('note-form-edit');
  form.id = `${noteID}`;

  const listContainer = document.createElement('ul');

  const listTitle = document.createElement('li');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Name: ';
  const title = document.createElement('input');
  title.classList.add('note-form-edit-title');
  title.maxLength = '30';
  title.required = true;
  listTitle.append(titleLabel, title);

  const listDescription = document.createElement('li');
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Description: ';
  const description = document.createElement('textarea');
  description.classList.add('note-form-edit-description');
  description.required = true;
  listDescription.append(descLabel, description);

  const listDate = document.createElement('li');
  const dueLabel = document.createElement('label');
  dueLabel.textContent = 'Date Due: ';
  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.classList.add('note-form-edit-date');
  dueDate.required = true;
  listDate.append(dueLabel, dueDate);

  const listPriority = document.createElement('li');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority: ';
  const priority = document.createElement('select');
  priority.classList.add('note-form-edit-priority');
  priority.required = true;
  listPriority.append(priorityLabel, priority);
  const high = document.createElement('option');
  const medium = document.createElement('option');
  const low = document.createElement('option');
  high.value = '3';
  medium.value = '2';
  low.value = '1';
  high.textContent = 'High';
  medium.textContent = 'Medium';
  low.textContent = 'Low';
  priority.append(high, medium, low);

  const buttonSection = document.createElement('li');
  const submitForm = document.createElement('button');
  const cancelForm = document.createElement('button');
  submitForm.type = 'submit';
  submitForm.textContent = 'Save';
  cancelForm.addEventListener('click', hideEditNote);
  cancelForm.textContent = 'Cancel';
  buttonSection.append(submitForm, cancelForm);

  listTitle.className = 'note-form-list-title';
  listDescription.className = 'note-form-list-description';
  listPriority.className = 'note-form-list-priority';
  buttonSection.className = 'note-form-buttons';

  form.addEventListener('submit', handleEditNoteSubmit);
  listContainer.append(listTitle, listDescription, listDate, listPriority, buttonSection);
  form.appendChild(listContainer);

  return form;
}

function showEditNote({ target }) {
  const noteID = target.parentNode.parentNode.id;
  const main = document.getElementById('main');
  main.appendChild(editNoteForm(noteID));

  const titleSection = target.parentNode.parentNode.querySelector('.note-title');
  const dates = target.parentNode.parentNode.querySelector('.dates');
  const dateSection = dates.querySelector('.note-date');
  const dueDate = dateSection.querySelector('.note-date-due');
  const container = target.parentNode.parentNode;
  const descriptionSection = target.parentNode.parentNode.querySelector('.note-description');

  const formTitle = document.querySelector('.note-form-edit-title');
  const formDate = document.querySelector('.note-form-edit-date');
  const formPriority = document.querySelector('.note-form-edit-priority');
  const formDescription = document.querySelector('.note-form-edit-description');

  formTitle.value = `${titleSection.textContent}`;
  formDate.value = `${dueDate.textContent}`;
  formDescription.value = `${descriptionSection.textContent}`;

  switch (container.dataset.priority) {
    case 'high':
      formPriority[0].selected = 'selected';
      break;
    case 'medium':
      formPriority[1].selected = 'selected';
      break;
    case 'low':
      formPriority[2].selected = 'selected';
      break;
    default:
      break;
  }
  blur();
}

function hideEditNote() {
  const editForm = document.querySelector('.note-form-edit');
  const main = document.getElementById('main');
  main.removeChild(editForm);
  noBlur();
}

function handleEditNoteSubmit(e) {
  e.preventDefault();
  const { target } = e;
  const title = target[0].value;
  const description = target[1].value;
  const dueDate = target[2].value;
  const priority = target[3].value;

  const container = document.getElementById(`${target.id}`);
  const noteTitle = container.querySelector('.note-title');
  const noteDescription = container.querySelector('.note-description');
  const noteDate = container.querySelector('.note-date-due');

  noteTitle.textContent = `${title}`;
  noteDescription.textContent = `${description}`;
  noteDate.textContent = `${dueDate}`;

  switch (priority) {
    case '3':
      container.style.border = '4px solid rgb(235, 0, 0)';
      container.dataset.priority = 'high';
      break;
    case '2':
      container.style.border = '4px solid rgb(255, 233, 38)';
      container.dataset.priority = 'medium';
      break;
    case '1':
      container.style.border = '4px solid rgb(34, 234, 18)';
      container.dataset.priority = 'low';
      break;
    default:
      break;
  }

  changeNoteStorage(noteTitle, noteDescription, noteDate, priority, target.id);
  hideEditNote();
}

export default showEditNote;
