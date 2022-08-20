// DogImages
import React from 'react'
import withLoader from './index04_3'
import useHover from './index04_2'

const DogImages = (props) => {
  const [hoverRef, hovering] = useHover()

  return (
    <div ref={hoverRef} {...props}>
      {hovering && <div id="hover">Hover me</div>}
      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="dog" key={index} />
        ))}
      </div>
    </div>
  )
}
