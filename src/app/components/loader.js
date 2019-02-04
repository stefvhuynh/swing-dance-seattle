import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <div className="flex justify-center align-center">
      <FontAwesomeIcon
        className="animation-compass font-green font-xl"
        icon="compass"
      />
    </div>
  );
};

export default Loader;
