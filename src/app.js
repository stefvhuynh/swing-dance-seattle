import React from "react";
import { Fragment, Link } from "redux-little-router";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Fragment forRoute="/">
          <div>
            <div>
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <Fragment forRoute="/">
              <div>at home</div>
            </Fragment>

            <Fragment forRoute="/contact">
              <div>contacting</div>
            </Fragment>
          </div>
        </Fragment>
      </div>
    );
  }
}
