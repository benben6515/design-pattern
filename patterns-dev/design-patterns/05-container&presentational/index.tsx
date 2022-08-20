import React from 'react'

export default ({ dogs }) => {
  return dogs.map((dog, i) => <img src={dog} key={i} alt="dog" />)
}
