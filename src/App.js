import React, { useState, useEffect } from 'react'
import './App.css'
import Column from './Column'
import store from 'store'
import defaultsPlugin from 'store/plugins/defaults'

const App = () => {
  const [customs, setCustoms] = useState(() => {
    store.addPlugin(defaultsPlugin)
    store.defaults({ customs: [] })
    return store.get('customs')
  })
  const [todos, setTodos] = useState([])

  useEffect(() => {
    store.set('customs', customs)
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
