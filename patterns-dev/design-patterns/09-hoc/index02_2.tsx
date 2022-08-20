// dogImages

import React from 'react'
import withLoader from './index02_1'

const DogImages = (props) => (
  props.data.message.map((dog, index) => (
    <img src={dog} alt="dog" key={index} />
  ))
)

export default withLoader(DogImages, "https://dogs.ceo/api/breed/labrador/images/random/6")
