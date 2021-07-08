let projects = [];

let currentProject;

function setProjects() {
  projects = JSON.parse(localStorage.getItem('projects'));
}

function setCurrentProject() {
  currentProject = JSON.parse(localStorage.getItem('currentProject'));
}

function populateStorage() {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('currentProject', JSON.stringify(currentProject));
  setProjects();
}

function getLocalStorage() {
  if (!localStorage.getItem('projects')) {
    populateStorage();
  } else {
    setProjects();
    setCurrentProject();
  }
}

function changeNoteStorage(title, description, date, priority, noteID) {
  const projectIndex = projects.findIndex((project) => project.name === currentProject.name);
  const noteIndex = projects[projectIndex].list.findIndex((note) => note.id === noteID);

  projects[projectIndex].list[noteIndex].title = title.innerText;
  projects[projectIndex].list[noteIndex].description = description.innerText;
  projects[projectIndex].list[noteIndex].dueDate = date.innerText;
  projects[projectIndex].list[noteIndex].priority = priority;

  currentProject = projects[projectIndex];
  populateStorage();
}

function changeProjectStorage(title, description, projectID) {
  const projectIndex = projects.findIndex((project) => project.id === projectID);
  projects[projectIndex].name = title.innerText;
  projects[projectIndex].description = description;

  populateStorage();
}

export {
  projects,
  currentProject,
  changeNoteStorage,
  changeProjectStorage,
  getLocalStorage,
  populateStorage,
};
