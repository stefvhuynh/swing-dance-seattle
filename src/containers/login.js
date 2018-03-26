import { connect } from "react-redux";

import { loginSubmitted } from "../redux/actions";
import { getAuthenticationError } from "../redux/reducer";
import Login from "../components/login";

const mapStateToProps = (state) => ({
  loginError: getAuthenticationError(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => dispatch(loginSubmitted(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
