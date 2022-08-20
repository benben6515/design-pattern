// Input.js
import React, { useEffect, useState } from 'react'
import { useKeyPressed } from './index04_1'

export default () => {
  const [input, setInput] = useState('')
  const pressB = useKeyPressed('b')
  const pressE = useKeyPressed('e')
  const pressN = useKeyPressed('n')

  useEffect(() => {
    console.log('The user press B')
  }, [pressB])

  useEffect(() => {
    console.log('The user press E')
  }, [pressE])

  useEffect(() => {
    console.log('The user press N')
  }, [pressN])

  return (
    <input
      value={input}
      onChange={(e) => e.target.value}
      placeholder="type something"
    />
  )
}
