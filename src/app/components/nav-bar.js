import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { ROUTE_CLASSES, ROUTE_DANCES, ROUTE_EVENTS } from "../constants";
import { navigated } from "../state/actions";

const NavBar = ({ onNavigate }) => {
  return (
    <nav>
      <NavLink to={ROUTE_CLASSES}>
        <span onClick={() => onNavigate(ROUTE_CLASSES)}>Classes</span>
      </NavLink>
      <NavLink to={ROUTE_DANCES}>
        <span onClick={() => onNavigate(ROUTE_DANCES)}>Dances</span>
      </NavLink>
      <NavLink to={ROUTE_EVENTS}>
        <span onClick={() => onNavigate(ROUTE_EVENTS)}>Events</span>
      </NavLink>
    </nav>
  );
};

NavBar.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onNavigate: path => dispatch(navigated(path))
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
