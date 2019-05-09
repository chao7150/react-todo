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

  const addItemFactory = (state: Item[], setState: Function) => (item: Item) =>
    setState([item, ...state])

  const deleteItemFactory = (state: Item[], setState: Function) => (
    id: String
  ) => setState(state.filter((item: Item) => item.id !== id))

  return (
    <div className="App">
      <Column
        type="customs"
        contents={customs}
        onAddItem={addItemFactory(customs, setCustoms)}
        deleteItem={deleteItemFactory(customs, setCustoms)}
        onAddAll={() => setTodos([...customs, ...todos])}
      />
      <Column
        type="todos"
        contents={todos}
        onAddItem={addItemFactory(todos, setTodos)}
        deleteItem={deleteItemFactory(todos, setTodos)}
      />
    </div>
  )
}
