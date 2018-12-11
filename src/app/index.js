import React, { Fragment, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import debounce from "debounce";
import isNode from "detect-node";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME,
  WINDOW_RESIZE_DEBOUNCE_TIME
} from "./constants";
import { windowResized } from "./state/actions";
import Classes from "./pages/classes";
import Dances from "./pages/dances";
import Events from "./pages/events";
import Header from "./components/header";
import NavBar from "./components/nav-bar";

const App = ({ onWindowResize }) => {
  const handleWindowResize = debounce(
    event => onWindowResize(event.currentTarget.innerWidth),
    WINDOW_RESIZE_DEBOUNCE_TIME
  );

  if (!isNode) {
    useLayoutEffect(() => {
      onWindowResize(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => {
        handleWindowResize.clear();
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  }

  return (
    <Fragment>
      <Header />
      <NavBar />

      <Switch>
        <Route path={ROUTE_HOME} exact component={Classes} />
        <Route path={ROUTE_CLASSES} component={Classes} />
        <Route path={ROUTE_DANCES} component={Dances} />
        <Route path={ROUTE_EVENTS} component={Events} />
      </Switch>
    </Fragment>
  );
};

App.propTypes = {
  onWindowResize: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onWindowResize: width => dispatch(windowResized(width))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
