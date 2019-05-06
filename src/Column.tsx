import * as React from 'react'
import { Item } from './App'
import { TaskInput } from './TaskInput'

interface ColumnProps {
  type: string
  contents: Item[]
  onAddItem: (item: Item) => void
  onAddAll?: () => void
}

export const Column = (props: ColumnProps) => {
  const listItems = props.contents.map(
    (content: { id: React.Key; task: React.ReactNode }) => {
      return <li key={props.type + content.id}>{content.task}</li>
    }
  )

  return (
    <div>
      <h2>{props.type}</h2>
      <TaskInput onAddItem={props.onAddItem} />
      <ul>{listItems}</ul>
      {props.type === 'customs' ? (
        <button onClick={props.onAddAll}>add all</button>
      ) : null}
    </div>
  )
}
