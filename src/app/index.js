import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "redux-little-router";
import debounce from "debounce";
import window from "global/window";

import { ROUTE_ADMIN, ROUTE_HOME } from "./routes";
import { WINDOW_RESIZE_DEBOUNCE_TIME } from "./constants";
import { windowResized } from "./redux/actions";
import AdminPage from "./pages/admin-page";
import HomePage from "./pages/home-page";

class App extends React.Component {
  static propTypes = {
    onAppMount: PropTypes.func,
    onWindowResize: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    this.handleWindowResize.clear();
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = debounce(
    (event) => {
      const { onWindowResize } = this.props;
      if (onWindowResize) {
        onWindowResize(event.currentTarget.innerWidth);
      }
    },
    WINDOW_RESIZE_DEBOUNCE_TIME
  );

  onHomePage = (location) => {
    return location.route !== ROUTE_ADMIN;
  };

  render() {
    return (
      <div className="full-height flex column justify-space-between">
        <Fragment forRoute={ROUTE_HOME}>
          <div>
            <Fragment withConditions={this.onHomePage}>
              <HomePage/>
            </Fragment>
            <Fragment forRoute={ROUTE_ADMIN}><AdminPage/></Fragment>
          </div>
        </Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onWindowResize: (width) => dispatch(windowResized(width))
});

export default connect(null, mapDispatchToProps)(App);
