import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "redux-little-router";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME,
  ROUTE_WORKSHOPS
} from "../routes";

class Filter extends React.Component {
  static propTypes = {
    currentRoute: PropTypes.string,
    isMobile: PropTypes.bool,
    onFilterClick: PropTypes.func
  };

  getTabClassName(selected) {
    return classNames("flex justify-center font-white pd-sm pointer", {
      "border-bottom-thick border-off-white": selected,
      "transparent": !selected
    });
  }

  render() {
    const { currentRoute, isMobile, onFilterClick } = this.props;

    return (
      <div className="flex column shadow">
        <ul className="flex font-lg bg-green shadow z-top justify-center">
          <li className={classNames({ "fill": isMobile })}>
            <Link
              className={
                this.getTabClassName(
                  currentRoute === ROUTE_HOME || currentRoute === ROUTE_CLASSES
                )
              }
              href={ROUTE_CLASSES}
              onClick={onFilterClick.bind(null, ROUTE_CLASSES)}
            >
              Classes
            </Link>
          </li>
          <li className={classNames({ "fill": isMobile })}>
            <Link
              className={this.getTabClassName(currentRoute === ROUTE_WORKSHOPS)}
              href={ROUTE_WORKSHOPS}
              onClick={onFilterClick.bind(null, ROUTE_CLASSES)}
            >
              Workshops
            </Link>
          </li>
          <li className={classNames({ "fill": isMobile })}>
            <Link
              className={this.getTabClassName(currentRoute === ROUTE_DANCES)}
              href={ROUTE_DANCES}
              onClick={onFilterClick.bind(null, ROUTE_DANCES)}
            >
              Dances
            </Link>
          </li>
          <li className={classNames({ "fill": isMobile })}>
            <Link
              className={this.getTabClassName(currentRoute === ROUTE_EVENTS)}
              href={ROUTE_EVENTS}
              onClick={onFilterClick.bind(null, ROUTE_EVENTS)}
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
