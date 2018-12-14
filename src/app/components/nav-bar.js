import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "../constants";
import { navigated } from "../state/actions";

const NavBar = ({ location, onNavigate = () => {} }) => {
  const { pathname } = location;
  const navLinks = [
    { route: ROUTE_CLASSES, label: "Classes" },
    { route: ROUTE_DANCES, label: "Dances" },
    { route: ROUTE_EVENTS, label: "Events" }
  ];

  return (
    <nav className="desktop-flex justify-center bg-green">
      <div className="desktop-flex text-center">
        {navLinks.map(({ label, route }) => {
          const isActive =
            route === ROUTE_CLASSES
              ? pathname === ROUTE_HOME || pathname === route
              : pathname === route;

          return (
            <NavLink key={route} to={route}>
              <div
                className={classNames(
                  "pd-y-xs desktop-pd-y-sm pd-x-sm font-white border-b-thick",
                  {
                    "bold border-white": isActive,
                    "border-transparent opacity-half": !isActive
                  }
                )}
                onClick={() => onNavigate(route)}
              >
                {label}
              </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  onNavigate: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onNavigate: route => dispatch(navigated(route))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NavBar)
);
