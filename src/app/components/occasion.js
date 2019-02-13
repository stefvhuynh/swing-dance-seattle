import React, { Fragment, useState } from "react";
import classNames from "classnames";

import {
  formatDanceStyles,
  formatDate,
  formatLink,
  formatRecurrence
} from "../utils";

const Occasion = ({
  className,
  danceStyles = [],
  dateEnd,
  dateStart,
  hasDropInClass,
  hasLiveMusic,
  isWeekendEvent,
  link,
  name,
  neighborhood,
  organization,
  recurrenceDay,
  recurrenceTimes = [],
  time,
  venue
}) => {
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  const Wrapper = link
    ? ({ children }) => (
        <a
          href={formatLink(link)}
          target="_blank"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </a>
      )
    : Fragment;

  return (
    <li
      className={classNames("pd-x-sm pd-y-sm", {
        [className]: !!className
      })}
    >
      <Wrapper>
        {neighborhood && (
          <div className="uppercase font-sm mg-b-xs">{neighborhood}</div>
        )}

        <div className="flex justify-between mg-b-sm">
          <div className="basis-65">
            {name && (
              <h4
                className={classNames("font-black font-lg bold mg-b-xs", {
                  underline: hovering
                })}
              >
                {name}
              </h4>
            )}
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
      </Wrapper>
    </li>
  );
};

export default Occasion;
