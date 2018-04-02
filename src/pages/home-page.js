import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { CATEGORY_CLASS } from "../constants";
import { selectClassesByDay, selectSubfilter } from "../redux/selectors";
import Filter from "../containers/filter";
import EventListRecurring from "../components/event-list-recurring";

class HomePage extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    subfilter: PropTypes.string
  };

  renderContent() {
    const { classes, subfilter } = this.props;

    switch (subfilter) {
      case CATEGORY_CLASS: {
        return <EventListRecurring events={classes}/>;
      }
    }
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
  classes: selectClassesByDay(state),
  subfilter: selectSubfilter(state)
});

export default connect(mapStateToProps)(HomePage);
