import React from "react";
import { connect } from "react-redux";

import Filter from "../components/filter";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Filter filters={[{ display: "filter", value: "1" }]}/>
      </div>
    );
  }
}

export default connect()(HomePage);
