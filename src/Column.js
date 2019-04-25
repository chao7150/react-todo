import React, { useState } from 'react'
import { generate } from 'shortid'

const Column = props => {
  const [inputValue, setInputValue] = useState('')

  const listItems = props.contents.map(content => {
    return <li key={props.type + content.id}>{content.task}</li>
  })
  const handleAddItem = () => {
    if (inputValue === '') {
      return
    }
    props.onAddItem({ task: inputValue, id: generate() })
    setInputValue('')
  }

  return (
    <div>
      <h2>{props.type}</h2>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleAddItem}>add</button>
      <ul>{listItems}</ul>
      {props.type === 'customs' ? (
        <button onClick={props.onAddAll}>add all</button>
      ) : null}
    </div>
  )
}

export default Column
