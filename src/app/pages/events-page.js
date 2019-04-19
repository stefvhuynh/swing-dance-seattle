import React from "react";
import { connect } from "react-redux";

import { formatDate } from "../utils";
import {
  selectEventsSortedByDate,
  selectEventsFetching
} from "../state/selectors";
import Page from "../components/page";
import OccasionsList from "../components/occasions-list";

const EventsPage = ({ events, loading }) => {
  return (
    <Page loading={loading}>
      {events.map(
        eventsOnDate =>
          eventsOnDate &&
          eventsOnDate.length > 0 && (
            <OccasionsList
              key={eventsOnDate[0].dateStart}
              heading={formatDate(eventsOnDate[0].dateStart, true)}
              occasions={eventsOnDate}
            />
          )
      )}
    </Page>
  );
};

const mapStateToProps = state => ({
  events: selectEventsSortedByDate(state),
  loading: selectEventsFetching(state)
});

export default connect(mapStateToProps)(EventsPage);
