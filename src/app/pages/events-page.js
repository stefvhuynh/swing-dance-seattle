import React from "react";
import { connect } from "react-redux";

import { formatDate } from "../utils";
import { selectEventsByDate, selectEventsFetching } from "../state/selectors";
import Page from "../components/page";
import OccasionsList from "../components/occasions-list";

const EventsPage = ({ events, loading }) => {
  return (
    <Page loading={loading}>
      {Object.entries(events).map(([date, eventsOnDate]) => (
        <OccasionsList
          key={date}
          heading={formatDate(date, true)}
          occasions={eventsOnDate}
        />
      ))}
    </Page>
  );
};

const mapStateToProps = state => ({
  events: selectEventsByDate(state),
  loading: selectEventsFetching(state)
});

export default connect(mapStateToProps)(EventsPage);
