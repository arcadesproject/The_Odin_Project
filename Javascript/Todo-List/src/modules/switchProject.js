import { projects, currentProject, populateStorage } from './storage';
import { displayTodos } from './displayTodos';

function switchProject(project) {
  currentProject = project;
}

function switchProjectDisplay({ target }) {
  const project = projects.find((proj) => proj.id === target.parentNode.id);
  /// ///////////////////////////////
  if (project.id === currentProject.id) {
    return;
  }
  switchProject(project);
  const notesContainer = document.getElementById('notes-container');
  if (notesContainer) {
    clearNotes(notesContainer);
  }
  const main = document.getElementById('main');
  main.removeChild(main.lastChild);
  const notesSection = displayTodos(project);
  main.appendChild(notesSection);
  populateStorage();
}

function clearNotes(notesContainer) {
  notesContainer.innerHTML = '';
}

export { switchProject, switchProjectDisplay, clearNotes };
