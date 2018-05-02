import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import arrowUp from "@fortawesome/fontawesome-free-solid/faArrowUp";
import bars from "@fortawesome/fontawesome-free-solid/faBars";
import caretDown from "@fortawesome/fontawesome-free-solid/faCaretDown";
import caretRight from "@fortawesome/fontawesome-free-solid/faCaretRight";
import compass from "@fortawesome/fontawesome-free-regular/faCompass";

const iconMap = {
  arrowUp,
  bars,
  caretDown,
  caretRight,
  compass
};

const Icon = (props) => {
  const { name, ...iconProps } = props;

  return (
    <FontAwesomeIcon
      className="width-xs"
      icon={iconMap[name]}
      {...iconProps}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(iconMap)),
  onClick: PropTypes.func
};

export default Icon;
