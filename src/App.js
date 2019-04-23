import React, { useState }from 'react';
import './App.css';
import Column from './column'

const App = () => {
  const [customs, setCustoms] = useState(['Dota2', 'diary', 'programming'])
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Column
        type='customs'
        contents={customs}
        onAddItem={(item) => setCustoms([item, ...customs])}
        onAddAll={() => setTodos([...customs, ...todos])}
      />
      <Column
        type='todos'
        contents={todos}
        onAddItem={(item) => setTodos([item, ...todos])}
      />
    </div>
  );
}

export default App;
