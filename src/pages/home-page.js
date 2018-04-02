import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  SUBFILTER_LEARN_CLASSES,
  SUBFILTER_DANCE_DANCES
} from "../constants";

import {
  selectClassesByDay,
  selectDancesByDay,
  selectSubfilter
} from "../redux/selectors";

import Filter from "../containers/filter";
import RecurringSchedule from "../components/recurring-schedule";

const experiencesByDayPropType = RecurringSchedule.propTypes.experiencesByDay;

class HomePage extends React.Component {
  static propTypes = {
    classesByDay: experiencesByDayPropType,
    dancesByDay: experiencesByDayPropType,
    subfilter: PropTypes.string
  };

  renderContent() {
    const { classesByDay, dancesByDay, subfilter } = this.props;

    switch (subfilter) {
      case SUBFILTER_LEARN_CLASSES: {
        return <RecurringSchedule experiencesByDay={classesByDay}/>;
      }
      case SUBFILTER_DANCE_DANCES: {
        return <RecurringSchedule experiencesByDay={dancesByDay}/>;
      }
      default: {
        return <div>some content</div>;
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
  dancesByDay: selectDancesByDay(state),
  classesByDay: selectClassesByDay(state),
  subfilter: selectSubfilter(state)
});

export default connect(mapStateToProps)(HomePage);
