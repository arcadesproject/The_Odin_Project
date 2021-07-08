import { format } from 'date-fns';
import { currentProject, populateStorage, projects } from './storage';
import { addTodo, todoFactory } from './todoFactory';
import { todoCard } from './displayTodos';
import { blur, noBlur } from './blur';

function noteForm() {
  const form = document.createElement('form');
  form.id = 'note-form';

  const listContainer = document.createElement('ul');

  const listTitle = document.createElement('li');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Name: ';
  const title = document.createElement('input');
  title.id = 'note-form-title';
  title.maxLength = '30';
  title.required = true;
  listTitle.append(titleLabel, title);

  const listDescription = document.createElement('li');
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Description: ';
  const description = document.createElement('textarea');
  description.id = 'note-form-description';
  description.required = true;
  listDescription.append(descLabel, description);

  const listDate = document.createElement('li');
  const dueLabel = document.createElement('label');
  dueLabel.textContent = 'Date Due: ';
  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.id = 'note-form-date';
  dueDate.required = true;
  listDate.append(dueLabel, dueDate);

  const listPriority = document.createElement('li');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority: ';
  const priority = document.createElement('select');
  priority.id = 'note-form-priority';
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
  submitForm.textContent = 'Submit';
  cancelForm.addEventListener('click', hideNoteForm);
  cancelForm.textContent = 'Cancel';
  buttonSection.append(submitForm, cancelForm);

  listTitle.className = 'note-form-list-title';
  listDescription.className = 'note-form-list-description';
  listPriority.className = 'note-form-list-priority';
  buttonSection.className = 'note-form-buttons';

  form.addEventListener('submit', handleNoteSubmit);
  listContainer.append(listTitle, listDescription, listDate, listPriority, buttonSection);
  form.appendChild(listContainer);

  return form;
}

function handleNoteSubmit(e) {
  e.preventDefault();
  const { target } = e;
  const title = target[0].value;
  const description = target[1].value;
  const dueDate = target[2].value;
  const priority = target[3].value;
  const addedDate = format(new Date(), 'yyyy-MM-dd');
  const note = todoFactory(title, description, addedDate, dueDate, priority);
  addTodo(note, currentProject);
  const index = projects.findIndex((project) => project.id === currentProject.id);
  projects.splice(index, 1, currentProject);
  const noteCard = todoCard(note);
  const notesContainer = document.getElementById('notes-container');
  notesContainer.prepend(noteCard);
  hideNoteForm();
  populateStorage();
}

function showNoteForm() {
  const main = document.getElementById('main');
  main.appendChild(noteForm());
  blur();
}

function hideNoteForm() {
  const noteFormElement = document.getElementById('note-form');
  const main = document.getElementById('main');
  main.removeChild(noteFormElement);
  noBlur();
}

export { noteForm, showNoteForm, hideNoteForm };
