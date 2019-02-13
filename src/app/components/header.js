import React, { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleMoreInfoClick = () => setShowInfo(!showInfo);

  return (
    <header className="flex justify-center bg-dark-grey font-white pd-t-xl pd-b-md pd-x-md">
      <div className="text-center max-width">
        <h1 className="font-emphasis font-xl font-white mg-b-sm">
          Swing Dance Seattle
        </h1>
        <h2 className="mg-b-md lines-spaced">
          Lindy Hop, Balboa, and Blues in the greater Seattle area
        </h2>

        <div className="mg-b-xs">
          <a
            className={classNames("bold font-sm font-green", {
              underline: showInfo
            })}
            onClick={handleMoreInfoClick}
          >
            <FontAwesomeIcon
              className="mg-r-xs"
              icon={showInfo ? "angle-down" : "angle-right"}
            />
            More info
          </a>
        </div>

        {showInfo && (
          <p className="font-sm lines-spaced">
            This is a schedule of all classes, dances, and events in the region,
            and it will be kept up-to-date to the best of our ability. For the
            most accurate information, click on an event to see the event's
            webpage. If you would like your event added, altered, or removed,
            send us an{" "}
            <a className="font-green" href="mailto:swingdancesct@gmail.com">
              email
            </a>
            . This is also an open-source project! Check out the project{" "}
            <a
              className="font-green"
              href="https://github.com/stefvhuynh/swing-dance-seattle"
            >
              here
            </a>{" "}
            if you would like to contribute!
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
