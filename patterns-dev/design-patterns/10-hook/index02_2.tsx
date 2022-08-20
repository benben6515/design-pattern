// Input.js hook
import React, { useState } from 'react'

export default () => {
  const [input, setInput] = useState('')
  return (
    <input
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="type something"
    />
  )
}
