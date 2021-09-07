// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: '', id: uniqid(), number: null },
      tasks: [],
      amount: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.tasks.length + 1,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    const temp = this.state.tasks.slice();
    const tasks = [...temp, this.state.task];
    this.setState({
      tasks: [...tasks],
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  onDeleteTask = (e) => {
    const { id } = e.target.parentNode;
    const tasks = this.state.tasks.slice();
    const filtered = tasks.filter(function (task) {
      return task.id !== id;
    });
    filtered.map((task, index) => {
      return (task.number = index + 1);
    });
    this.setState({
      tasks: [...filtered],
    });
  };

  onEditTask = (e) => {
    const { target } = e;
    const { parentNode } = target;
    const { id } = target.parentNode;
    const tasks = this.state.tasks.slice();
    const task = tasks.find((i) => i.id === id);
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = `${task.text}`;
    const submitInput = document.createElement('button');
    submitInput.textContent = 'Submit';
    submitInput.addEventListener('click', this.onSubmitEdit);
    parentNode.removeChild(target.parentNode.firstChild);
    parentNode.removeChild(target.parentNode.lastChild);
    parentNode.prepend(editInput, submitInput);
  };

  onSubmitEdit = (e) => {
    const { target } = e;
    const { parentNode } = target;
    const { id } = target.parentNode;
    const tasks = this.state.tasks.slice();
    const task = tasks.find((i) => i.id === id);
    task.text = `${target.parentNode.firstChild.value}`;
    const taskName = document.createElement('div');
    taskName.textContent = `${task.number}. ${task.text}`;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', this.onEditTask);
    parentNode.removeChild(target.parentNode.firstChild);
    parentNode.removeChild(target.parentNode.lastChild.previousSibling);
    this.setState({
      tasks: [...tasks],
    });
    parentNode.append(editButton);
    parentNode.prepend(taskName);
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input id="taskInput" type="text" onChange={this.handleChange} value={task.text} />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.onDeleteTask} editTask={this.onEditTask} />
      </div>
    );
  }
}

export default App;
