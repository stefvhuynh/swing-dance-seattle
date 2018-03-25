import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment, Link } from "redux-little-router";
import debounce from "debounce";

import { ROUTE_CONTACT, ROUTE_HOME } from "./routes";
import { windowResized } from "./redux/actions";
import { WINDOW_RESIZE_DEBOUNCE_TIME } from "./constants";

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
    return (
      <div>
        <Fragment forRoute={ROUTE_HOME}>
          <div>
            <div>
              <Link href={ROUTE_HOME}>Home</Link>
              <Link href={ROUTE_CONTACT}>Contact</Link>
            </div>

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
