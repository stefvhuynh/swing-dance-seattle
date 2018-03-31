import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.string,
      value: PropTypes.string
    })),
    onFilterClick: PropTypes.func
  };

  handleFilterClick = (event) => {
    const { onFilterClick } = this.props;

    if (onFilterClick) {
      onFilterClick(event.target.value);
    }
  };

  render() {
    const { filters } = this.props;

    return (
      <ul>
        {filters.map(({ display, value }) => (
          <li key={value} value={value} onClick={this.handleFilterClick}>
            {display}
          </li>
        ))}
      </ul>
    );
  }
}

export default Filter;
