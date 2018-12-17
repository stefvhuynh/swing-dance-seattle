import React, { Fragment } from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectClassesByDay } from "../state/selectors";
import OccasionsList from "../components/occasions-list";

const Classes = ({ classes }) => {
  return (
    <Fragment>
      <OccasionsList heading={DAY_MAP[0]} occasions={classes[0]} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  classes: selectClassesByDay(state)
});

export default connect(mapStateToProps)(Classes);
