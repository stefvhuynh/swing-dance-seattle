import React, { Fragment } from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectClassesByDay } from "../state/selectors";
import OccasionsList from "../components/occasions-list";

const Classes = ({ classes }) => {
  const classesList = [...Object.entries(classes).slice(1), ["0", classes[0]]];

  return (
    <Fragment>
      {classesList.map(([key, classList]) => (
        <OccasionsList key={key} heading={DAY_MAP[key]} occasions={classList} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  classes: selectClassesByDay(state)
});

export default connect(mapStateToProps)(Classes);
