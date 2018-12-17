import React, { Fragment } from "react";

import { formatDanceStyles, formatRecurrence } from "../utils";

const OccasionsList = ({ heading, occasions = [] }) => {
  return (
    <Fragment>
      <h3>{heading}</h3>
      <ul>
        {occasions.map(occasion => (
          <li key={occasion.id}>
            <div className="flex">
              <div>
                <div>{occasion.neighborhood}</div>
                <h4>{occasion.name}</h4>
                <div>{occasion.organization}</div>
                <div>@ {occasion.venue}</div>
              </div>
              <div>
                <div>
                  {formatRecurrence(
                    occasion.recurrenceTimes,
                    occasion.recurrenceDay
                  )}
                </div>
                <div>{occasion.time}</div>
              </div>
            </div>
            <ul>
              <li>&ndash; {formatDanceStyles(occasion.danceStyles)}</li>
            </ul>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default OccasionsList;
