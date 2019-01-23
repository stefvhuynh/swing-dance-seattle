import React from "react";
import classNames from "classnames";

import Occasion from "./occasion";

const OccasionsList = ({ heading, occasions = [] }) => {
  return (
    <div className="pd-y-md font-grey">
      <h3 className="font-lg mg-l-sm mg-b-sm uppercase bold">{heading}</h3>

      <ul className="bg-white shadow">
        {occasions.map((occasion, index) => (
          <Occasion
            key={occasion.id}
            className={classNames({
              ["border-b-thin border-light-grey"]:
                index !== occasions.length - 1
            })}
            {...occasion}
          />
        ))}
      </ul>
    </div>
  );
};

export default OccasionsList;
