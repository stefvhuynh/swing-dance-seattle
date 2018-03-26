import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutSubmitted } from "../redux/actions";
import { selectIsLoggedIn } from "../redux/reducer";
import Login from "../containers/login";
import AddEvent from "../components/add-event";

const AdminPage = ({ isLoggedIn, onLogOutClick }) => {
  return (
    <div>
      {isLoggedIn && <button onClick={onLogOutClick}>Log Out</button>}
      {isLoggedIn ? <AddEvent/> : <Login/>}
    </div>
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
