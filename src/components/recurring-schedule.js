import React from "react";
import PropTypes from "prop-types";

import { RECURRENCE_DAY_MAP } from "../constants";
import ExperienceList from "./experience-list";

const RecurringSchedule = ({ experiences }) => {
  const scheduleItems = Object.keys(experiences).map((day) => {
    return (
      <li key={day}>
        <div>{RECURRENCE_DAY_MAP[day]}</div>
        <ExperienceList experiences={experiences[day]}/>
      </li>
    );
  });

  return <ul>{scheduleItems}</ul>;
};

RecurringSchedule.propTypes = {
  experiences: PropTypes.object
};

export default RecurringSchedule;
