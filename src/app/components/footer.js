import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex justify-between align-center bg-dark-grey font-white font-xs pd-x-sm pd-y-md">
      <div>
        <div className="font-emphasis font-sm">Swing Dance Seattle</div>
        <div>swingdancesct@gmail.com</div>
      </div>

      <a href="#" className="font-white">
        Back to Top
        <FontAwesomeIcon className="mg-l-xs" icon="arrow-up" />
      </a>
    </div>
  );
};

export default Footer;
