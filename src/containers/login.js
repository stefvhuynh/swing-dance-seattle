import { connect } from "react-redux";

import { loginSubmitted } from "../redux/actions";
import { selectLoginError } from "../redux/reducer";
import Login from "../components/login";

const mapStateToProps = (state) => ({
  loginError: selectLoginError(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => dispatch(loginSubmitted(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
