import React, { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTodos([...todos, task]);
    setTask('');
  }

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Tasks List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
      placeholder="Enter a task" />
      <div className="button-container">
      <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
           <li key={index}>
            {todo}
            <button className="remove-btn" onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default App;