import React from "react";
import PropTypes from "prop-types";

export default class Login extends React.Component {
  static propTypes = {
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
    const { password, username } = this.state;

    return (
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={this.handleInputChange.bind(this, "username")}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            value={password}
            onChange={this.handleInputChange.bind(this, "password")}
          />
        </div>

        <button onClick={this.handleSubmitClick}>Log In</button>
      </form>
    );
  }
}
