import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FILTER_MAP, FILTER_SUBFILTER_MAP, SUBFILTER_MAP } from "../constants";
import { convertMapToList } from "../utils";

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
    const filters = convertMapToList(FILTER_MAP, "value", "display");
    const subfilters = FILTER_SUBFILTER_MAP[selectedFilter].map((subfilter) => {
      return { value: subfilter, display: SUBFILTER_MAP[subfilter] };
    });

    return (
      <div className="flex column">
        <ul className="flex bg-green">
          {filters.map(({ display, value }) => (
            <li
              className={classNames("fill text-center pd-t-sm pd-b-sm", {
                "border-bottom-thick": selectedFilter === value,
                "bold": selectedFilter === value
              })}
              key={value}
              value={value}
              onClick={this.handleFilterClick}
            >
              {display}
            </li>
          ))}
        </ul>

        <ul className="flex">
          {subfilters.map(({ display, value }) => (
            <li
              className={classNames("fill text-center pd-t-sm pd-b-sm", {
                "border-bottom-thick": selectedSubfilter === value,
                "bold": selectedSubfilter === value
              })}
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
