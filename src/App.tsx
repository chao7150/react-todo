import * as React from 'react'
import * as store from 'store'
import { Column } from './Column'

export interface Item {
  task: string
  id: string
}

export const App = () => {
  const [customs, setCustoms] = React.useState(() => {
    return store.get('customs', [])
  })
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    store.set('customs', customs)
  })

  return (
    <div className="App">
      <Column
        type="customs"
        contents={customs}
        onAddItem={(item: Item) => setCustoms([item, ...customs])}
        onAddAll={() => setTodos([...customs, ...todos])}
      />
      <Column
        type="todos"
        contents={todos}
        onAddItem={(item: Item) => setTodos([item, ...todos])}
      />
    </div>
  )
}
