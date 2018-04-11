import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import bars from "@fortawesome/fontawesome-free-solid/faBars";
import arrowUp from "@fortawesome/fontawesome-free-solid/faArrowUp";
import compass from "@fortawesome/fontawesome-free-regular/faCompass";

const iconMap = {
  arrowUp,
  bars,
  compass
};

const Icon = (props) => {
  const { name, ...iconProps } = props;
  return <FontAwesomeIcon icon={iconMap[name]} {...iconProps}/>;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(iconMap)),
  onClick: PropTypes.func
};

export default Icon;
