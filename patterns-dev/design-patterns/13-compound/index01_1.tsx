import React, { useState, createContext, useContext } from 'react'

const Icon = () => <i>{/*some icon*/}</i>

const FlyOutContext = createContext()

const FlyOut = (props) => {
  const [open, toggle] = useState(false)

  const providerValue = { open, toggle }

  return (
    <FlyOutContext.Provider value={providerValue}>
      {props.children}
    </FlyOutContext.Provider>
  )
}

const Toggle = () => {
  const { open, toggle } = useContext(FlyOutContext)

  return (
    <div onClick={() => toggle(!open)}>
      <Icon />
    </div>
  )
}

const List = ({ children }) => {
  const { open } = useContext(FlyOutContext)
  return (open && <ul>{children}</ul>)
}

const Item = ({ children }) => <li>{children}</li>

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item

export { FlyOut }

