// FlyoutMenu.js
import React from 'react'
import { FlyOut } from './index01_1'

export default () => {
  // with Compound Pattern, don't need to add any state
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  )
}
