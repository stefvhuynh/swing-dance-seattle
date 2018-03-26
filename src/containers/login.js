import { connect } from "react-redux";

import { loginSubmitted } from "../redux/reducer";
import Login from "../components/login";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => dispatch(loginSubmitted(username, password))
});

export default connect(null, mapDispatchToProps)(Login);
