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

  handleInputChange = (event) => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
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
      <div className="flex-column">
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </label>

        <button onClick={this.handleSubmitClick}>Log In</button>

        {loginError && <div>{loginError}</div>}
      </div>
    );
  }
}
