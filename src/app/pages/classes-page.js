import React, { Fragment } from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectClassesByDay } from "../state/selectors";
import OccasionsList from "../components/occasions-list";

const ClassesPage = ({ classes }) => {
  return (
    <div className="pd-y-md">
      {DAY_MAP.map((day, index) => (
        <OccasionsList key={index} heading={day} occasions={classes[index]} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  classes: selectClassesByDay(state)
});

export default connect(mapStateToProps)(ClassesPage);
