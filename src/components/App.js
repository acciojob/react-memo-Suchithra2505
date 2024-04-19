


import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const handleAddTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters long.');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleIncrement}>Increment</button>
      <input
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task"
      />
      <button onClick={handleCustomTaskSubmit} id="submit-btn">Submit</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button id={`todo-${index}`} onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Counter value: {counter}</p>
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
      <UseMemo />
      <ReactMemo />
    </div>
  );
};

export default App;
