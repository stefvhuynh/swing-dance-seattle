import React from "react";
import PropTypes from "prop-types";

const EventListRecurring = () => (
  <div>
    <ul/>
  </div>
);

EventListRecurring.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  monthly: PropTypes.bool
};

export default EventListRecurring;
