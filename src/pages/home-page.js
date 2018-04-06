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
  selectIsAppInitialized,
  selectSubfilter,
  selectWorkshopsByDay
} from "../redux/selectors";

import Filter from "../containers/filter";
import Spinner from "../components/spinner";
import Schedule from "../components/schedule";

const experiencesByDayPropType = Schedule.propTypes.experiencesByDay;

class HomePage extends React.Component {
  static propTypes = {
    classesByDay: experiencesByDayPropType,
    dancesByDay: experiencesByDayPropType,
    eventsByDay: experiencesByDayPropType,
    isLoading: PropTypes.bool,
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

    let content;

    switch (subfilter) {
      case SUBFILTER_CLASSES: {
        content = <Schedule recurring experiencesByDay={classesByDay}/>;
        break;
      }
      case SUBFILTER_DANCES: {
        content = <Schedule recurring experiencesByDay={dancesByDay}/>;
        break;
      }
      case SUBFILTER_EVENTS: {
        content = <Schedule experiencesByDay={eventsByDay}/>;
        break;
      }
      case SUBFILTER_WORKSHOPS: {
        content = <Schedule experiencesByDay={workshopsByDay}/>;
        break;
      }
    }

    return <div className="animation-fade-in">{content}</div>;
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <div
          className={
            "pd-t-xl pd-b-xl pd-l-md pd-r-md bg-dark-grey font-white " +
              "text-center"
          }
        >
          <h1 className="font-emphasis font-xxl mg-b-md">
            Swing Dance Seattle
          </h1>
          <div className="lines-spaced">
            A schedule of all things Lindy Hop, Balboa, Blues, and Shag
            related in the greater Seattle area
          </div>
        </div>

        <Filter/>

        <div className="mg-t-lg pd-l-md pd-r-md">
          {isLoading ? <Spinner/> : this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  classesByDay: selectClassesByDay(state),
  dancesByDay: selectDancesByDay(state),
  isLoading: !selectIsAppInitialized(state),
  eventsByDay: selectEventsByDay(state),
  subfilter: selectSubfilter(state),
  workshopsByDay: selectWorkshopsByDay(state)
});

export default connect(mapStateToProps)(HomePage);
