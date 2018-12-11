import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ROUTE_CLASSES, ROUTE_DANCES, ROUTE_EVENTS } from "../constants";
import { navigated } from "../state/actions";

const NavBar = ({ onNavigate }) => {
  return (
    <nav>
      <Link to={ROUTE_CLASSES} onClick={() => onNavigate(ROUTE_CLASSES)}>
        Classes
      </Link>
      <Link to={ROUTE_DANCES} onClick={() => onNavigate(ROUTE_DANCES)}>
        Dances
      </Link>
      <Link to={ROUTE_EVENTS} onClick={() => onNavigate(ROUTE_EVENTS)}>
        Events
      </Link>
    </nav>
  );
};

NavBar.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onNavigate: (path) => dispatch(navigated(path))
});

export default connect(null, mapDispatchToProps)(NavBar);
