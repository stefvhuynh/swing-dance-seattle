import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { RECURRENCE_DAY_MAP } from "../constants";
import { getDateDisplay } from "../utils";
import ExperienceList from "./experience-list";

const Schedule = ({ className, experiencesByDay, isMobile }) => {
  const scheduleItems = Object.keys(experiencesByDay).sort().map((day) => {
    const isRecurring = !!RECURRENCE_DAY_MAP[day];

    const listHeading = isRecurring
      ? RECURRENCE_DAY_MAP[day]
      : getDateDisplay(day, { includeDay: true, includeSuffix: true });

    return (
      <li
        key={day}
        className={classNames("mg-b-xl", {
          "basis-half pd-l-sm pd-r-sm": !isMobile
        })}
      >
        <div
          className={classNames("bold mg-b-sm pd-l-md font-grey", {
            "uppercase": isRecurring
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
  isMobile: PropTypes.bool
};

export default Schedule;
