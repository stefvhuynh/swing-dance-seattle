import React, { Fragment } from "react";
import { connect } from "react-redux";

const Classes = () => {
  return (
    <Fragment>
      <h3>classes</h3>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  classes: state.classes.data
});

export default connect(mapStateToProps)(Classes);
