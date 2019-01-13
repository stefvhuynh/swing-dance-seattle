import React from "react";
import classNames from "classnames";

import { formatDanceStyles, formatRecurrence } from "../utils";

const Occasion = ({
  className,
  danceStyles,
  name,
  neighborhood,
  organization,
  recurrenceDay,
  recurrenceTimes,
  time,
  venue
}) => {
  return (
    <li
      className={classNames("pd-x-sm pd-y-sm", {
        [className]: !!className
      })}
    >
      <div className="uppercase font-sm mg-b-xs">{neighborhood}</div>

      <div className="flex justify-between mg-b-sm">
        <div>
          <h4 className="font-black font-lg bold mg-b-xs">{name}</h4>
          <div>{organization}</div>
          <div>@ {venue}</div>
        </div>

        <div>
          <div>{formatRecurrence(recurrenceTimes, recurrenceDay)}</div>

          <div>{time}</div>
        </div>
      </div>

      <ul className="italic">
        <li>&ndash; {formatDanceStyles(danceStyles)}</li>
      </ul>
    </li>
  );
};

export default Occasion;
