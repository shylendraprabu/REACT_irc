import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        <p>{this.state.isToggled ? 'Toggle is ON' : 'Toggle is OFF'}</p>
      </div>
    );
  }
}

export default ToggleButton;
