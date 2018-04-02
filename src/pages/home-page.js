import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectSubfilter } from "../redux/selectors";
import Filter from "../containers/filter";

class HomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    subfilter: PropTypes.string
  };

  renderContent() {
    return <div>some content</div>;
  }

  render() {
    return (
      <div>
        <div>
          welcome message
        </div>
        <Filter/>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subfilter: selectSubfilter(state)
});

export default connect(mapStateToProps)(HomePage);
