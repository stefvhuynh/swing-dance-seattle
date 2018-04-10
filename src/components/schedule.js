import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { RECURRENCE_DAY_MAP } from "../constants";
import { getDateDisplay } from "../utils";
import ExperienceList from "./experience-list";

const Schedule = ({ className, experiencesByDay, isMobile, recurring }) => {
  const scheduleItems = Object.keys(experiencesByDay).map((day) => {
    const listHeading = recurring
      ? RECURRENCE_DAY_MAP[day]
      : getDateDisplay(day, { includeDay: true, includeSuffix: true });

    return (
      <li
        key={day}
        className={classNames("mg-b-xl", {
          "width-300 mg-r-md": !isMobile
        })}
      >
        <div
          className={classNames("bold mg-b-sm pd-l-md font-grey", {
            "uppercase": recurring
          })}
        >
          {listHeading}
        </div>
        <ExperienceList experiences={experiencesByDay[day]}/>
      </li>
    );
  });

  return (
    <ul
      className={classNames(`flex ${className}`, {
        "column": isMobile,
        "wrap": !isMobile
      })}
    >
      {scheduleItems}
    </ul>
  );
};

Schedule.propTypes = {
  className: PropTypes.string,
  experiencesByDay: PropTypes.objectOf(ExperienceList.propTypes.experiences),
  isMobile: PropTypes.bool,
  recurring: PropTypes.bool
};

export default Schedule;
