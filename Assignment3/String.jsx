import React, { Component } from 'react';

class DynamicContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="input">Enter Text: </label>
        <input
          type="text"
          id="input"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <p>The entered Text : {this.state.inputValue}</p>
      </div>
    );
  }
}

export default DynamicContent;
