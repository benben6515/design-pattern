import React, { useState, useEffect } from 'react'
import useDogImages from './useDogImages'

export default () => {
  const dogs = useDogImages()

  return dogs.map((dog, i) => <img src={dog} key={i} alt="dog" />)
}
