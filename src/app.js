import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "redux-little-router";
import debounce from "debounce";

import { ROUTE_ADMIN, ROUTE_CONTACT, ROUTE_HOME } from "./routes";
import { WINDOW_RESIZE_DEBOUNCE_TIME } from "./constants";
import { appInitialized, windowResized } from "./redux/actions";
import NavBar from "./containers/nav-bar";
import AdminPage from "./pages/admin-page";
import HomePage from "./pages/home-page";

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
    const links = [
      { content: "Home", href: ROUTE_HOME },
      { content: "Contact", href: ROUTE_CONTACT }
    ];

    return (
      <div>
        <Fragment forRoute={ROUTE_HOME}>
          <div>
            <NavBar links={links}/>

            <Fragment forRoute={ROUTE_HOME}>
              <HomePage/>
            </Fragment>

            <Fragment forRoute={ROUTE_CONTACT}>
              <div>contacting</div>
            </Fragment>

            <Fragment forRoute={ROUTE_ADMIN}>
              <AdminPage/>
            </Fragment>
          </div>
        </Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAppMount: () => dispatch(appInitialized()),
  onWindowResize: (width) => dispatch(windowResized(width))
});

export default connect(null, mapDispatchToProps)(App);
