import React from 'react';

function Overview(props) {
  const { tasks, deleteTask, editTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li id={task.id} key={task.id}>
            <div>
              {task.number}. {task.text}
            </div>
            <button onClick={deleteTask}>Delete</button>
            <button onClick={editTask}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Overview;
