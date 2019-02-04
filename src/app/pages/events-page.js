import React from "react";
import { connect } from "react-redux";

import { selectEventsByDate, selectEventsFetching } from "../state/selectors";
import OccasionsList from "../components/occasions-list";
import Loader from "../components/loader";

const EventsPage = ({ events, loading }) => {
  return (
    <div className="pd-y-md">
      {loading ? (
        <Loader />
      ) : (
        Object.entries(events).map(([date, eventsOnDate]) => (
          <OccasionsList key={date} heading={date} occasions={eventsOnDate} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  events: selectEventsByDate(state),
  loading: selectEventsFetching(state)
});

export default connect(mapStateToProps)(EventsPage);
