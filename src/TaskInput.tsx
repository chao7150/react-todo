import * as React from 'react'
import * as shortid from 'shortid'
import { Item } from './App'

interface TaskInputProps {
  onAddItem: (item: Item) => void
}

export const TaskInput = (props: TaskInputProps) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleAddItem = () => {
    if (inputValue === '') {
      return
    }
    props.onAddItem({ task: inputValue, id: shortid.generate() })
    setInputValue('')
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            handleAddItem()
          }
        }}
      />
      <button tabIndex={-1} onClick={handleAddItem}>
        add
      </button>
    </div>
  )
}
