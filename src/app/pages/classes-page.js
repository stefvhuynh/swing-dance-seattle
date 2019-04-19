import React from "react";
import { connect } from "react-redux";

import { DAY_MAP } from "../constants";
import { selectClassesByDay, selectClassesFetching } from "../state/selectors";
import Page from "../components/page";
import OccasionsList from "../components/occasions-list";

const ClassesPage = ({ classes, loading }) => {
  return (
    <Page loading={loading}>
      {DAY_MAP.map(
        (day, index) =>
          classes[index] &&
          classes[index].length > 0 && (
            <OccasionsList
              key={index}
              heading={day}
              headingClassName="uppercase"
              occasions={classes[index]}
            />
          )
      )}
    </Page>
  );
};

const mapStateToProps = state => ({
  classes: selectClassesByDay(state),
  loading: selectClassesFetching(state)
});

export default connect(mapStateToProps)(ClassesPage);
