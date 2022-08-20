import React, { useState, useEffect } from 'react'

export default () => {
  const [ dogs, setDogs ] = useState([])

  useEffect(() => {
    fetch("https://dog.ceo/api/bread/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message }) => setDogs(message))
  }, [])

  return dogs
}
