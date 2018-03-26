import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { isAuthenticated } from "../redux/reducer";
import Login from "../containers/login";
import AddEvent from "../components/add-event";

const AdminPage = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <AddEvent/> : <Login/>}
    </div>
  );
};

AdminPage.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStateToProps = (state) => ({ isLoggedIn: isAuthenticated(state) });

export default connect(mapStateToProps)(AdminPage);
