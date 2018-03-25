import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "redux-little-router";
import debounce from "debounce";

import { ROUTE_CONTACT, ROUTE_HOME } from "./routes";
import { WINDOW_RESIZE_DEBOUNCE_TIME } from "./constants";
import { windowResized } from "./redux/actions";
import NavBar from "./containers/nav-bar";

class App extends React.Component {
  static propTypes = {
    onWindowResize: PropTypes.func
  }

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
              <div>at home</div>
            </Fragment>

            <Fragment forRoute={ROUTE_CONTACT}>
              <div>contacting</div>
            </Fragment>
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
