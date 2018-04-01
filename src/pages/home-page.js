import React from "react";
import { connect } from "react-redux";

import Filter from "../containers/filter";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          welcome message
        </div>
        <Filter/>
      </div>
    );
  }
}

export default connect()(HomePage);
