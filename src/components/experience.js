import React from "react";
import PropTypes from "prop-types";

import {
  RECURRENCE_DAY_MAP,
  RECURRENCE_TIME_EVERY,
  RECURRENCE_TIME_MAP
} from "../constants";

const Conditional = ({ children, condition }) => {
  return condition ? children : null;
};

const Experience = ({
  dateEnd,
  dateStart,
  link,
  name,
  neighborhood,
  organization,
  recurrenceDay,
  recurrenceTime,
  time,
  venue
}) => {
  const showRecurrence = recurrenceDay
    && recurrenceTime
    && recurrenceTime !== RECURRENCE_TIME_EVERY;

  return (
    <a target="_blank" href={link}>
      <div>
        <span>{name}</span>
        <Conditional condition={neighborhood}>
          <span>{neighborhood}</span>
        </Conditional>
      </div>

      <Conditional condition={organization}>
        <div>{organization}</div>
      </Conditional>

      <Conditional condition={showRecurrence}>
        <div>
          {RECURRENCE_TIME_MAP[recurrenceTime]}
          &nbsp;{RECURRENCE_DAY_MAP[recurrenceDay]}
        </div>
      </Conditional>

      <Conditional condition={dateStart}>
        <div>
          {dateStart}
          <Conditional condition={dateEnd}>
            <span> - {dateEnd}</span>
          </Conditional>
        </div>
      </Conditional>

      <Conditional condition={time || venue}>
        <div>
          <Conditional condition={time}><span>{time}</span></Conditional>
          <Conditional condition={time && venue}><span> @ </span></Conditional>
          <Conditional condition={venue}><span>{venue}</span></Conditional>
        </div>
      </Conditional>
    </a>
  );
};

Experience.propTypes = {
  dateEnd: PropTypes.string,
  dateStart: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  neighborhood: PropTypes.string,
  organization: PropTypes.string,
  recurrenceDay: PropTypes.string,
  recurrenceTime: PropTypes.string,
  time: PropTypes.string,
  venue: PropTypes.string
};

export default Experience;
