import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FILTER_MAP, SUBFILTER_MAP } from "../constants";
import { generateValueDisplayList } from "../utils";

class Filter extends React.Component {
  static propTypes = {
    onFilterClick: PropTypes.func,
    onSubfilterClick: PropTypes.func,
    selectedFilter: PropTypes.string,
    selectedSubfilter: PropTypes.string
  };

  handleFilterClick = (event) => {
    const { onFilterClick } = this.props;

    if (onFilterClick) {
      onFilterClick(`${event.target.value}`);
    }
  };

  handleSubfilterClick = (event) => {
    const { onSubfilterClick } = this.props;

    if (onSubfilterClick) {
      onSubfilterClick(`${event.target.value}`);
    }
  };

  render() {
    const { selectedFilter, selectedSubfilter } = this.props;
    const filters = generateValueDisplayList(FILTER_MAP);
    const subfilters = generateValueDisplayList(SUBFILTER_MAP[selectedFilter]);

    return (
      <div>
        <ul>
          {filters.map(({ display, value }) => (
            <li
              className={classNames({ underline: selectedFilter === value })}
              key={value}
              value={value}
              onClick={this.handleFilterClick}
            >
              {display}
            </li>
          ))}
        </ul>

        <ul>
          {subfilters.map(({ display, value }) => (
            <li
              className={classNames({ underline: selectedSubfilter === value })}
              key={value}
              value={value}
              onClick={this.handleSubfilterClick}
            >
              {display}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Filter;
