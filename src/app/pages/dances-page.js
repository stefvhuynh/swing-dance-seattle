import React from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectDancesByDay, selectDancesFetching } from "../state/selectors";
import OccasionsList from "../components/occasions-list";
import Loader from "../components/loader";

const DancesPage = ({ dances, loading }) => {
  return (
    <div className="pd-y-md">
      {loading ? (
        <Loader />
      ) : (
        DAY_MAP.map((day, index) => (
          <OccasionsList
            key={index}
            heading={day}
            headingClassName="uppercase"
            occasions={dances[index]}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  dances: selectDancesByDay(state),
  loading: selectDancesFetching(state)
});

export default connect(mapStateToProps)(DancesPage);
