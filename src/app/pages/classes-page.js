import React from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectClassesByDay, selectClassesFetching } from "../state/selectors";
import OccasionsList from "../components/occasions-list";
import Loader from "../components/loader";

const ClassesPage = ({ classes, loading }) => {
  return (
    <div className="pd-y-md">
      {loading ? (
        <Loader />
      ) : (
        DAY_MAP.map((day, index) => (
          <OccasionsList key={index} heading={day} occasions={classes[index]} />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  classes: selectClassesByDay(state),
  loading: selectClassesFetching(state)
});

export default connect(mapStateToProps)(ClassesPage);
