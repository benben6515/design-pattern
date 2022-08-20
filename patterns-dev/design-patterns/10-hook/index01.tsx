// classes component
import React from 'react'

type ButtonProps = {}
type ButtonState = {
  enabled: boolean
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  state
  constructor() {
    super();
    this.state= {
      enabled: false,
    };
  }

  handleClick() {
    // @ts-ignore
    this.setState({ enabled: !this.state.enabled })
  }

  render() {
    const { enabled } = this.state;
    const btnText = enabled ? 'enabled' : 'disabled';

    return (
      <div className={`btn enabled-${enabled}`} onClick={this.handleClick}>
        {btnText}
      </div>
    );
  }
}
