import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {
  const { options, ...selectProps } = props;

  return (
    <select {...selectProps}>
      {options.map(({ value, display }) => (
        <option key={value} value={value}>
          {display}
        </option>
      ))}
    </select>
  );
};

const valuePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Select.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    value: valuePropType
  })),
  value: valuePropType
};

export default Select;
