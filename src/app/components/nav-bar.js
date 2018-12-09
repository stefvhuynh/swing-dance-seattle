import React from "react";
import { Link } from "react-router-dom";

import { ROUTE_CLASSES, ROUTE_DANCES, ROUTE_EVENTS } from "../constants";

const NavBar = () => {
  return (
    <nav>
      <Link to={ROUTE_CLASSES}>Classes</Link>
      <Link to={ROUTE_DANCES}>Dances</Link>
      <Link to={ROUTE_EVENTS}>Events</Link>
    </nav>
  );
};

export default NavBar;
