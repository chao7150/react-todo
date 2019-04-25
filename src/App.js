import React, { useState, useEffect } from 'react'
import './App.css'
import Column from './Column'
import { store } from 'store'

const App = () => {
  const [customs, setCustoms] = useState(() => {
    const initialState = localStorage.getItem('customs')
    if (!initialState) {
      return []
    } else {
      return initialState.split(',')
    }
  })
  const [todos, setTodos] = useState([])

  useEffect(() => {
    localStorage.setItem('customs', customs.join(','))
  })

  return (
    <div className="App">
      <Column
        type="customs"
        contents={customs}
        onAddItem={item => setCustoms([item, ...customs])}
        onAddAll={() => setTodos([...customs, ...todos])}
      />
      <Column
        type="todos"
        contents={todos}
        onAddItem={item => setTodos([item, ...todos])}
      />
    </div>
  )
}

export default App
