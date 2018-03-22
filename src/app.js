import React from "react";
import { Fragment, Link } from "redux-little-router";

import { ROUTE_CONTACT, ROUTE_HOME } from "./routes";

export default class App extends React.Component {
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
