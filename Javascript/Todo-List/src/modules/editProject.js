import { currentProject, changeProjectStorage, projects } from './storage';
import { blur, noBlur } from './blur';

function editProjectForm(projectID) {
  const form = document.createElement('form');
  form.classList.add('project-form-edit');
  form.id = `${projectID}`;

  const listContainer = document.createElement('ul');

  const listTitle = document.createElement('li');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Name: ';
  const title = document.createElement('input');
  title.classList.add('project-form-edit-title');
  title.maxLength = '30';
  title.required = true;
  listTitle.append(titleLabel, title);

  const listDescription = document.createElement('li');
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Description: ';
  const description = document.createElement('textarea');
  description.classList.add('project-form-edit-description');
  description.maxLength = '300';
  description.required = true;
  listDescription.append(descLabel, description);

  const buttonSection = document.createElement('li');
  const submitForm = document.createElement('button');
  const cancelForm = document.createElement('button');
  submitForm.type = 'submit';
  submitForm.textContent = 'Save';
  cancelForm.addEventListener('click', hideEditProject);
  cancelForm.textContent = 'Cancel';
  buttonSection.append(submitForm, cancelForm);

  form.addEventListener('submit', handleEditProjectSubmit);
  listContainer.append(listTitle, listDescription, buttonSection);
  form.appendChild(listContainer);

  listTitle.className = 'project-form-list-title';
  listDescription.className = 'project-form-list-description';
  buttonSection.className = 'project-form-buttons';

  return form;
}

function showEditProject(e) {
  e.stopPropagation();
  const { target } = e;
  const projectID = target.parentNode.parentNode.id;
  const projectIndex = projects.findIndex((project) => project.id === projectID);
  const { description } = projects[projectIndex];
  const main = document.getElementById('main');
  main.appendChild(editProjectForm(projectID));

  const titleSection = target.parentNode.parentNode.querySelector('.project-title');

  const formTitle = document.querySelector('.project-form-edit-title');
  const formDescription = document.querySelector('.project-form-edit-description');

  formTitle.value = `${titleSection.textContent}`;
  formDescription.value = `${description}`;
  blur();
}

function hideEditProject() {
  const editProject = document.querySelector('.project-form-edit');
  const main = document.getElementById('main');
  main.removeChild(editProject);
  noBlur();
}

function handleEditProjectSubmit(e) {
  e.preventDefault();
  const { target } = e;
  const title = target[0].value;
  const description = target[1].value;

  const container = document.getElementById(`${target.id}`);
  const projectTitle = container.querySelector('.project-title');

  const notesTitle = document.getElementById('notes-title');
  const notesSub = document.getElementById('notes-sub');

  projectTitle.textContent = `${title}`;

  changeProjectStorage(projectTitle, description, target.id);
  hideEditProject();

  if (currentProject !== '') {
    if (currentProject.id === target.id) {
      notesTitle.textContent = `${title} notes`;
      notesSub.textContent = `${description}`;
    }
  }
}

export default showEditProject;
