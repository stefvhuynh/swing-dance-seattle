import React from "react";
import PropTypes from "prop-types";

export default class Login extends React.Component {
  static propTypes = {
    loginError: PropTypes.string,
    onSubmit: PropTypes.func
  };

  state = {
    username: "",
    password: ""
  };

  handleInputChange = (stateKey, event) => {
    this.setState({ [stateKey]: event.target.value });
  };

  handleSubmitClick = () => {
    const { onSubmit } = this.props;
    const { password, username } = this.state;

    if (onSubmit) {
      onSubmit(username, password);
    }
  };

  render() {
    const { loginError } = this.props;
    const { password, username } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={this.handleInputChange.bind(this, "username")}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.handleInputChange.bind(this, "password")}
          />
        </div>

        <button onClick={this.handleSubmitClick}>Log In</button>

        {loginError && <div>{loginError}</div>}
      </div>
    );
  }
}
