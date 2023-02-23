import React, { useState } from 'react'

export function Comics() {

  const [text, setText] = useState();
  const [updated, setUpdated] = useState();

  const textOnChange = (event) => {
    setText(event.target.value);
  }

  const buttonOnClick = () => {
    setUpdated(text);
  }

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Comic</button>
      <p>Comic input: {text} </p>
      <p>Comic actualizado: {updated}</p>
    </div>
  )
}

