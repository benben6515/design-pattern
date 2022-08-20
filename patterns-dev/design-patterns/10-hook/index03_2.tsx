// useEffect
import React, { useState, useEffect } from 'react'

export default () => {
  const [input, setInput] = useState('')

  useEffect(() => {
    console.log(`The user typed ${input}`)
  }, [input])

  return (
    <input
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="input something"
    />
  )
}
