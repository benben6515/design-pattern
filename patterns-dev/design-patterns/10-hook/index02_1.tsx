// component example
import React from 'react'

type InputProps = {}
type InputState = {
  input: string
}

class Input extends React.Component<InputProps, InputState> {
  state
  constructor() {
    super()
    this.state = { input: '' }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    // @ts-ignore
    this.setState({ input: e.target.value })
  }

  render() {
    return <input onChange={this.handleInput} />
  }
}
