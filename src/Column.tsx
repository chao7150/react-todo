import * as React from 'react'
import { Item } from './App'
import { TaskInput } from './TaskInput'

interface ColumnProps {
  type: string
  contents: Item[]
  onAddItem: (item: Item) => void
  deleteItem: (id: string) => void
  onAddAll?: () => void
}

export const Column = ({ type, ...props }: ColumnProps) => {
  const listItems = props.contents.map(
    (content: { id: string; task: string }) => {
      return (
        <tr key={type + content.id}>
          <td>
            <button onClick={e => props.deleteItem(content.id)}>del</button>
          </td>
          <td>{content.task}</td>
        </tr>
      )
    }
  )

  return (
    <div>
      <h2>{type}</h2>
      <TaskInput onAddItem={props.onAddItem} />
      <table>
        <tbody>{listItems}</tbody>
      </table>
      {type === 'customs' ? (
        <button onClick={props.onAddAll}>add all</button>
      ) : null}
    </div>
  )
}
