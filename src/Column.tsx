import { useState } from 'react'
import * as shortid from 'shortid'
import React = require('react')
import { Item } from './App'

interface Props {
  type: string
  contents: Item[]
  onAddItem: (item: Item) => void
  onAddAll?: () => void
}

const Column = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const listItems = props.contents.map(
    (content: { id: React.Key; task: React.ReactNode }) => {
      return <li key={props.type + content.id}>{content.task}</li>
    }
  )
  const handleAddItem = () => {
    if (inputValue === '') {
      return
    }
    props.onAddItem({ task: inputValue, id: shortid.generate() })
    setInputValue('')
  }

  return (
    <div>
      <h2>{props.type}</h2>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter') {
            handleAddItem()
          }
        }}
      />
      <button onClick={handleAddItem}>add</button>
      <ul>{listItems}</ul>
      {props.type === 'customs' ? (
        <button onClick={props.onAddAll}>add all</button>
      ) : null}
    </div>
  )
}

export default Column
