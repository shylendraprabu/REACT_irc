import React, { Component } from 'react';

class LoginFormClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: '',
        password: '',
      },
    };
  }

  handleChangeEvent = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.formData;
    // Check if both email and password are non-empty before logging
    if (email && password) {
      console.log('Form Data:', this.state.formData);
      // You can add further logic for form submission here
    }
  };

  render() {
    const { email, password } = this.state.formData;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEvent}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangeEvent}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginFormClass;
