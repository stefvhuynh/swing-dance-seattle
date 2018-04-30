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
        className={classNames({
          "flex mg-b-xl": !isMobile,
          "mg-b-lg": isMobile
        })}
      >
        <div
          className={classNames("bold font-grey pd-md", {
            "uppercase": isRecurring,
            "basis-fifth": !isMobile
          })}
        >
          {listHeading}
        </div>
        <div className="fill">
          <ExperienceList experiences={experiencesByDay[day]}/>
        </div>
      </li>
    );
  });

  return (
    <ul className={`flex column ${className}`}>
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
