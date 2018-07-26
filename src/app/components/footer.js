import React from "react";
import Icon from "./icon";

const Footer = () => (
  <div className="bg-dark-grey">
    <div
      className={
        "no-shrink flex justify-space-between align-center max-width " +
          "margin-auto pd-t-lg pd-b-lg pd-l-md pd-r-md font-white"
      }
    >
      <div className="lines-spaced">
        <div className="font-emphasis font-sm">Seattle Swing Dance</div>
        <div className="font-xs">revivalrhythmswing@gmail.com</div>
      </div>
      <a href="#" className="font-white font-xs">
        Back to top <Icon name="arrowUp"/>
      </a>
    </div>
  </div>
);

export default Footer;
