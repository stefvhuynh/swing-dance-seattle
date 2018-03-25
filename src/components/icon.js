import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import bars from "@fortawesome/fontawesome-free-solid/faBars";

const iconMap = {
  bars
};

const Icon = ({ name }) => <FontAwesomeIcon icon={iconMap[name]}/>;

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconMap))
};

export default Icon;
