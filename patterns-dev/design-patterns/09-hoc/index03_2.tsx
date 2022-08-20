// withHover
import React, { useState } from 'react'

export default (Element) => {
  return (props) => {
    const [hovering, setHover] = useState(false)
    return (
      <Element
        {...props}
        hovering={hovering}
        onMouseEnter={() => setHover(true)}
        onMouseLeaver={() => setHover(false)}
      />
    )
  }
}
