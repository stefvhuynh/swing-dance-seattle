import React, { useState } from "react";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMoreInfoClick = () => setShowInfo(!showInfo);

  return (
    <header>
      <h1>Swing Dance Seattle</h1>
      <h2>Lindy Hop, Balboa, and Blues in the greater Seattle area</h2>

      <button onClick={handleMoreInfoClick}>More info</button>
      {showInfo && (
        <p>
          This is a schedule of all classes, dances, and events in the region,
          and it will be kept up-to-date to the best of our ability. For the
          most accurate information, click on an event to see the event's
          webpage. If you would like your event added, altered, or removed,
          send us an email. This is also an open-source project! Check out the
          project here if you would like to contribute!
        </p>
      )}
    </header>
  );
};

export default Header;
