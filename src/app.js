import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "redux-little-router";
import debounce from "debounce";

import { ROUTE_ADMIN, ROUTE_HOME } from "./routes";
import { WINDOW_RESIZE_DEBOUNCE_TIME } from "./constants";
import { appInitialized, windowResized } from "./redux/actions";
import AdminPage from "./pages/admin-page";
import HomePage from "./pages/home-page";
import Icon from "./components/icon";

class App extends React.Component {
  static propTypes = {
    onAppMount: PropTypes.func,
    onWindowResize: PropTypes.func
  };

  componentDidMount() {
    const { onAppMount, onWindowResize } = this.props;

    if (onAppMount) {
      onAppMount();
    }

    if (onWindowResize) {
      onWindowResize(window.innerWidth);
    }

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

  render() {
    return (
      <div className="full-height flex column justify-space-between">
        <Fragment forRoute={ROUTE_HOME}>
          <div>
            <Fragment forRoute={ROUTE_HOME}><HomePage/></Fragment>
            <Fragment forRoute={ROUTE_ADMIN}><AdminPage/></Fragment>
          </div>
        </Fragment>

        <div
          className={
            "no-shrink flex justify-space-between align-center bg-dark-grey " +
              "pd-t-lg pd-b-lg pd-l-md pd-r-md mg-t-xl font-white"
          }
        >
          <div className="lines-spaced">
            <div className="font-emphasis">Seattle Swing Dance</div>
            <div className="font-sm">revivalrhythmswing@gmail.com</div>
          </div>
          <a href="#" className="font-white font-sm">
            Back to top <Icon name="arrowUp"/>
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAppMount: () => dispatch(appInitialized()),
  onWindowResize: (width) => dispatch(windowResized(width))
});

export default connect(null, mapDispatchToProps)(App);
