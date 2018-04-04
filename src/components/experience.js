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
    <a
      className="block pd-md border-solid"
      href={link}
      target="_blank"
    >
      <Conditional condition={neighborhood}>
        <div className="bold uppercase font-sm font-grey">
          {neighborhood}
        </div>
      </Conditional>

      <div className="flex justify-space-between align-baseline">
        <div>
          <div className="semibold font-lg">{name}</div>

          <Conditional condition={organization}>
            <div className="italic font-grey">{organization}</div>
          </Conditional>

          <Conditional condition={venue}>
            <div className="italic font-grey">@ {venue}</div>
          </Conditional>
        </div>

        <div className="text-right">
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

          <Conditional condition={time}><div>{time}</div></Conditional>
        </div>
      </div>
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
