import React from 'react'

const withStyles = (Component) => (props) => {
  const style = { padding: '0.2rem', margin: '1rem' };
  return <Component style={style} {...props} />;
};

const Button = () => <button>Click me</button>;
const Text = () => <p>Hello World!</p>;

const styledButton = withStyles(Button);
const styledText = withStyles(Text);
