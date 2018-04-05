import React from "react";
import PropTypes from "prop-types";

import {
  RECURRENCE_DAY_MAP,
  RECURRENCE_TIME_EVERY,
  RECURRENCE_TIME_MAP
} from "../constants";

import { getDateDisplay } from "../utils";

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
  return (
    <a
      className="flex justify-space-between align-center pd-md bg-white shadow"
      href={link}
      target="_blank"
    >
      <div>
        <Conditional condition={neighborhood}>
          <div className="bold uppercase font-sm font-grey">
            {neighborhood}
          </div>
        </Conditional>

        <div className="bold font-lg">{name}</div>

        <Conditional condition={organization}>
          <div className="italic font-grey">{organization}</div>
        </Conditional>

        <Conditional condition={venue}>
          <div className="italic font-grey">@ {venue}</div>
        </Conditional>
      </div>

      <div className="text-right">
        <Conditional condition={recurrenceDay && recurrenceTime}>
          <div>
            {RECURRENCE_TIME_MAP[recurrenceTime]}
            {
              recurrenceTime !== RECURRENCE_TIME_EVERY
                && ` ${RECURRENCE_DAY_MAP[recurrenceDay]}`
            }
          </div>
        </Conditional>

        <Conditional condition={dateStart}>
          <div>
            {getDateDisplay(dateStart)}
            <Conditional condition={dateEnd}>
              <span> - <span className="no-wrap">
                {getDateDisplay(dateEnd)}
              </span></span>
            </Conditional>
          </div>
        </Conditional>

        <Conditional condition={time}><div>{time}</div></Conditional>
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
