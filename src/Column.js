import React, { useState } from 'react'

const Column = props => {
  const [inputValue, setInputValue] = useState('')

  const listItems = props.contents.map((content, index) => {
    return <li key={index}>{content}</li>
  })
  const handleAddItem = () => {
    if (inputValue === '') {
      return
    }
    props.onAddItem(inputValue)
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
