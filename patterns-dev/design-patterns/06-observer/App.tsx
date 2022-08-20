import React from 'react'
import { Button, Switch, FormControllerLabel } from 'material-ui/core'
import { ToastContainer, toast } from 'react-toastify'
import observable from './Observable'

const handleClick = () => observable.notify('user clicked button')
const handleToggle = () => observable.notify('user toggled switch')

const logger = (data) => console.log(`${Date.now()} ${data}`)
const toastify = (data) => toast(data, {
  position: toast.POSITION.BOTTOM_RIGHT,
  closeButton: false,
  autoClose: 2000
})

observable.subscribe(logger)
observable.subscribe(toastify)

export default () => {
  return (
    <div className="App">
      <Button variant="contained" onClick={handleClick}>Click me!</Button>
      <FormControllerLabel control={<Switch name="" onClick={handleToggle} label="Toggle me!"/>} />
      <ToastContainer />
    </div>
  )
}
