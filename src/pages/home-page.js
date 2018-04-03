import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  SUBFILTER_CLASSES,
  SUBFILTER_DANCES,
  SUBFILTER_EVENTS,
  SUBFILTER_WORKSHOPS
} from "../constants";

import {
  selectClassesByDay,
  selectDancesByDay,
  selectEventsByDay,
  selectSubfilter,
  selectWorkshopsByDay
} from "../redux/selectors";

import Filter from "../containers/filter";
import Schedule from "../components/schedule";

const experiencesByDayPropType = Schedule.propTypes.experiencesByDay;

class HomePage extends React.Component {
  static propTypes = {
    classesByDay: experiencesByDayPropType,
    dancesByDay: experiencesByDayPropType,
    eventsByDay: experiencesByDayPropType,
    subfilter: PropTypes.string,
    workshopsByDay: experiencesByDayPropType
  };

  renderContent() {
    const {
      classesByDay,
      dancesByDay,
      eventsByDay,
      subfilter,
      workshopsByDay
    } = this.props;

    switch (subfilter) {
      case SUBFILTER_CLASSES: {
        return <Schedule recurring experiencesByDay={classesByDay}/>;
      }
      case SUBFILTER_DANCES: {
        return <Schedule recurring experiencesByDay={dancesByDay}/>;
      }
      case SUBFILTER_EVENTS: {
        return <Schedule experiencesByDay={eventsByDay}/>;
      }
      case SUBFILTER_WORKSHOPS: {
        return <Schedule experiencesByDay={workshopsByDay}/>;
      }
    }
  }

  render() {
    return (
      <div>
        <div className="mg-b-md mg-l-md mg-r-md">
          <h1 className="bold font-xl text-center mg-t-md mg-b-md">
            Swing Dance Seattle
          </h1>
          <div>Some descriptions</div>
        </div>

        <div className="mg-b-md">
          <Filter/>
        </div>

        <div className="mg-l-md mg-r-md">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  classesByDay: selectClassesByDay(state),
  dancesByDay: selectDancesByDay(state),
  eventsByDay: selectEventsByDay(state),
  subfilter: selectSubfilter(state),
  workshopsByDay: selectWorkshopsByDay(state)
});

export default connect(mapStateToProps)(HomePage);
