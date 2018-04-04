import React from "react";
import PropTypes from "prop-types";

import { RECURRENCE_DAY_MAP } from "../constants";
import ExperienceList from "./experience-list";

const Schedule = ({ experiencesByDay, recurring }) => {
  const scheduleItems = Object.keys(experiencesByDay).map((day) => {
    const listHeading = recurring ? RECURRENCE_DAY_MAP[day] : day;

    return (
      <li key={day} className="mg-b-md">
        <div className="semibold uppercase mg-b-sm pd-l-md">{listHeading}</div>
        <ExperienceList experiences={experiencesByDay[day]}/>
      </li>
    );
  });

  return <ul>{scheduleItems}</ul>;
};

Schedule.propTypes = {
  experiencesByDay: PropTypes.objectOf(ExperienceList.propTypes.experiences),
  recurring: PropTypes.bool
};

export default Schedule;
