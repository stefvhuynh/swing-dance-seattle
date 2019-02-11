import React from "react";
import classNames from "classnames";

import Occasion from "./occasion";

const OccasionsList = ({ heading, headingClassName, occasions = [] }) => {
  return (
    <div className="pd-y-md font-grey full-width max-width desktop-flex">
      <h3
        className={classNames(
          "font-lg bold mg-l-sm mg-r-md pd-b-sm desktop-pd-t-sm desktop-basis-20 desktop-mg-l-none",
          {
            [headingClassName]: !!headingClassName
          }
        )}
      >
        {heading}
      </h3>

      <ul className="bg-white shadow desktop-basis-80">
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
