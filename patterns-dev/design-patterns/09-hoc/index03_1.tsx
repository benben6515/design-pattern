// DogImages
import React from 'react'
import withLoader from './index03_3'
import withHover from './index03_2'

const DogImages = (props) => (
  <div {...props}>
    { props.hovering && <div id="hover">Hovering!</div> }
    <div id="list">
      {props.data.message.map((dog, index) => (
        <img src={dog} alt="dog" key={index} />
      ))}
    </div>
  </div>
)

export default withHover(
  withLoader(DogImages, 'https://dog.ceo/api/breed/labrador/images/random/6')
)
