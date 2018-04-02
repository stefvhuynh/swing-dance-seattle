import React from "react";
import PropTypes from "prop-types";

import {
  RECURRENCE_DAY_FRIDAY,
  RECURRENCE_DAY_MAP,
  RECURRENCE_DAY_MONDAY,
  RECURRENCE_DAY_SATURDAY,
  RECURRENCE_DAY_SUNDAY,
  RECURRENCE_DAY_THURSDAY,
  RECURRENCE_DAY_TUESDAY,
  RECURRENCE_DAY_WEDNESDAY
} from "../constants";

import ExperienceList from "./experience-list";

const RecurringSchedule = ({ experiencesByDay }) => {
  const scheduleItems = Object.keys(experiencesByDay).map((day) => {
    return (
      <li key={day}>
        <div>{RECURRENCE_DAY_MAP[day]}</div>
        <ExperienceList experiences={experiencesByDay[day]}/>
      </li>
    );
  });

  return <ul>{scheduleItems}</ul>;
};

const experiencesPropType = ExperienceList.propTypes.experiences;

RecurringSchedule.propTypes = {
  experiencesByDay: PropTypes.shape({
    [RECURRENCE_DAY_SUNDAY]: experiencesPropType,
    [RECURRENCE_DAY_MONDAY]: experiencesPropType,
    [RECURRENCE_DAY_TUESDAY]: experiencesPropType,
    [RECURRENCE_DAY_WEDNESDAY]: experiencesPropType,
    [RECURRENCE_DAY_THURSDAY]: experiencesPropType,
    [RECURRENCE_DAY_FRIDAY]: experiencesPropType,
    [RECURRENCE_DAY_SATURDAY]: experiencesPropType
  })
};

export default RecurringSchedule;
