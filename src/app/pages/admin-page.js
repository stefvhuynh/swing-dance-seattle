import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutSubmitted } from "../redux/actions";
import { selectIsLoggedIn } from "../redux/selectors";
import Login from "../containers/login";

const AdminPage = ({ isLoggedIn, onLogOutClick }) => {
  return (
    <React.Fragment>
      {isLoggedIn && <button onClick={onLogOutClick}>Log Out</button>}
      {isLoggedIn ? <div>Admin Page</div> : <Login/>}
    </React.Fragment>
  );
};

AdminPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  onLogOutClick: PropTypes.func
};

const mapStateToProps = (state) => ({ isLoggedIn: selectIsLoggedIn(state) });

const mapDispatchToProps = (dispatch) => ({
  onLogOutClick: () => dispatch(logoutSubmitted())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
