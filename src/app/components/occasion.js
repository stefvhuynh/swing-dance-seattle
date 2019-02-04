import React from "react";
import classNames from "classnames";

import { formatDanceStyles, formatRecurrence } from "../utils";

const Occasion = ({
  className,
  danceStyles = [],
  dateEnd,
  dateStart,
  hasDropInClass,
  hasLiveMusic,
  isWeekendEvent,
  name,
  neighborhood,
  organization,
  recurrenceDay,
  recurrenceTimes = [],
  time,
  venue
}) => {
  return (
    <li
      className={classNames("pd-x-sm pd-y-sm", {
        [className]: !!className
      })}
    >
      {neighborhood && (
        <div className="uppercase font-sm mg-b-xs">{neighborhood}</div>
      )}

      <div className="flex justify-between mg-b-sm">
        <div>
          {name && <h4 className="font-black font-lg bold mg-b-xs">{name}</h4>}
          {organization && <div>{organization}</div>}
          {venue && <div>@ {venue}</div>}
        </div>

        <div>
          {dateStart && <span>{formatDate(dateStart)}</span>}
          {dateEnd && <span>&ndash; {formatDate(dateEnd)}</span>}
          {recurrenceTimes.length > 0 && recurrenceDay && (
            <div>{formatRecurrence(recurrenceTimes, recurrenceDay)}</div>
          )}
          {time && <div>{time}</div>}
        </div>
      </div>

      <ul className="italic">
        {isWeekendEvent && <li>&ndash; Weekend event</li>}
        {hasLiveMusic && <li>&ndash; Live music!</li>}
        {hasDropInClass && <li>&ndash; Drop-in class</li>}
        {danceStyles.length > 0 && (
          <li>&ndash; {formatDanceStyles(danceStyles)}</li>
        )}
      </ul>
    </li>
  );
};

export default Occasion;
