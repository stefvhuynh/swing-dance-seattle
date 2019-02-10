import React, { Fragment } from "react";
import classNames from "classnames";

import { formatDanceStyles, formatDate, formatRecurrence } from "../utils";

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
        <div className="basis-65">
          {name && <h4 className="font-black font-lg bold mg-b-xs">{name}</h4>}
          {organization && <div>{organization}</div>}
          {venue && <div>@ {venue}</div>}
        </div>

        <div className="basis-35 text-right">
          {dateStart && (
            <div>
              <span className="no-line-wrap">{formatDate(dateStart)}</span>
              {dateEnd && dateEnd !== dateStart && (
                <Fragment>
                  <span> &ndash; </span>
                  <span className="no-line-wrap">{formatDate(dateEnd)}</span>
                </Fragment>
              )}
            </div>
          )}
          {recurrenceTimes.length > 0 && !isNaN(recurrenceDay) && (
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
          <li className="flex">
            <div className="mg-r-space">&ndash;</div>
            <div>{formatDanceStyles(danceStyles)}</div>
          </li>
        )}
      </ul>
    </li>
  );
};

export default Occasion;
