import React from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectDancesByDay, selectDancesFetching } from "../state/selectors";
import Page from "../components/page";
import OccasionsList from "../components/occasions-list";

const DancesPage = ({ dances, loading }) => {
  return (
    <Page loading={loading}>
      {DAY_MAP.map(
        (day, index) =>
          dances[index] &&
          dances[index].length > 0 && (
            <OccasionsList
              key={index}
              heading={day}
              headingClassName="uppercase"
              occasions={dances[index]}
            />
          )
      )}
    </Page>
  );
};

const mapStateToProps = state => ({
  dances: selectDancesByDay(state),
  loading: selectDancesFetching(state)
});

export default connect(mapStateToProps)(DancesPage);
