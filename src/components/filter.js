import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FILTER_MAP, FILTER_SUBFILTER_MAP, SUBFILTER_MAP } from "../constants";
import { convertMapToList } from "../utils";

class Filter extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool,
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
    const { isMobile, selectedFilter, selectedSubfilter } = this.props;
    const filters = convertMapToList(FILTER_MAP, "value", "display");
    const subfilters = FILTER_SUBFILTER_MAP[selectedFilter].map((subfilter) => {
      return { value: subfilter, display: SUBFILTER_MAP[subfilter] };
    });

    return (
      <div className="flex column font-white shadow">
        <ul className="flex font-lg bg-green shadow z-top justify-center">
          {filters.map(({ display, value }) => (
            <li
              className={classNames("text-center pd-sm", {
                "border-bottom-thick border-off-white":
                  selectedFilter === value,
                "transparent": selectedFilter !== value,
                "fill": isMobile
              })}
              key={value}
              value={value}
              onClick={this.handleFilterClick}
            >
              {display}
            </li>
          ))}
        </ul>

        <ul className="flex bg-dark-grey justify-center">
          {subfilters.map(({ display, value }) => (
            <li
              className={classNames("text-center pd-sm", {
                "border-bottom-thick border-off-white":
                  selectedSubfilter === value,
                "transparent": selectedSubfilter !== value,
                "fill": isMobile
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
