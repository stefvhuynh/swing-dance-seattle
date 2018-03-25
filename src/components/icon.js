import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import bars from "@fortawesome/fontawesome-free-solid/faBars";

const iconMap = {
  bars
};

const Icon = ({ name, onClick }) => (
  <FontAwesomeIcon icon={iconMap[name]} onClick={onClick}/>
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconMap)),
  onClick: PropTypes.func
};

export default Icon;
