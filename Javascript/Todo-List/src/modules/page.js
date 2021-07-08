import { format } from 'date-fns';
import { displayProjects } from './displayProjects';
import { displayTodos } from './displayTodos';
import { noteForm } from './noteForm';
import { projectForm } from './projectForm';
import { projects, currentProject, getLocalStorage } from './storage';
import { switchProject } from './switchProject';
import { addTodo, todoFactory } from './todoFactory';

switchProject(projects[0]);
const testNote = todoFactory('Example Note', 'An example todo', format(new Date(), 'yyyy-MM-dd'), format(new Date(2022, 5, 6), 'yyyy-MM-dd'), '1');
addTodo(testNote, currentProject);

getLocalStorage();

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Notes App - Todo-List';
  title.id = 'page-title';
  header.appendChild(title);
  return header;
}

function createMain() {
  const main = document.createElement('section');
  main.id = 'main';
  main.append(displayProjects(), displayTodos(currentProject));
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');

  const creator = document.createElement('p');
  const source = document.createElement('p');
  source.id = 'source';

  creator.innerHTML = 'Made by <a href="https://github.com/arcadesproject"> arcadesproject<img id="git" alt="github icon" src="../src/assets/git.png"></a>';
  source.innerHTML = '<a href="https://github.com/arcadesproject/The_Odin_Project/tree/main/Javascript/Todo-List"> source';

  footer.append(creator, source);
  return footer;
}

function createBlur() {
  const blur = document.createElement('div');
  blur.id = 'blur';
  return blur;
}

function page() {
  const content = document.getElementById('content');
  content.append(createHeader(), createMain(), createFooter(), createBlur());
}

export default page;
