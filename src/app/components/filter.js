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

  subTabs = {
    dance: [
      { display: "Dances", route: ROUTE_DANCES },
      { display: "Events", route: ROUTE_EVENTS }
    ],
    learn: [
      {
        display: "Classes",
        route: ROUTE_CLASSES,
        selected: [ROUTE_HOME, ROUTE_CLASSES]
      },
      { display: "Workshops", route: ROUTE_WORKSHOPS }
    ]
  };

  onLearnTab() {
    const { currentRoute } = this.props;

    return currentRoute === ROUTE_CLASSES
      || currentRoute === ROUTE_WORKSHOPS
      || currentRoute === ROUTE_HOME;
  }

  onDanceTab() {
    const { currentRoute } = this.props;
    return currentRoute === ROUTE_DANCES || currentRoute === ROUTE_EVENTS;
  }

  getTabClassName(selected) {
    return classNames("flex justify-center font-white pd-sm pointer", {
      "border-bottom-thick border-off-white": selected,
      "transparent": !selected
    });
  }

  renderSubTabs() {
    const { currentRoute, isMobile, onFilterClick } = this.props;
    const subTabs = this.onLearnTab() ? this.subTabs.learn : this.subTabs.dance;

    const subTabItems = subTabs.map(({ display, route, selected }) => {
      const isTabSelected = selected
        ? selected.includes(currentRoute)
        : route === currentRoute;

      return (
        <li className={classNames({ "fill": isMobile })} key={route}>
          <Link
            className={this.getTabClassName(isTabSelected)}
            href={route}
            onClick={onFilterClick.bind(null, route)}
          >
            {display}
          </Link>
        </li>
      );
    });

    return (
      <ul className="flex bg-dark-grey justify-center">
        {subTabItems}
      </ul>
    );
  }

  render() {
    const { isMobile, onFilterClick } = this.props;

    return (
      <div className="flex column shadow">
        <ul className="flex font-lg bg-green shadow z-top justify-center">
          <li className={classNames({ "fill": isMobile })}>
            <Link
              className={this.getTabClassName(this.onLearnTab())}
              href={ROUTE_CLASSES}
              onClick={onFilterClick.bind(null, ROUTE_CLASSES)}
            >
              Learn!
            </Link>
          </li>
          <li className={classNames({ "fill": isMobile })}>
            <Link
              className={this.getTabClassName(this.onDanceTab())}
              href={ROUTE_DANCES}
              onClick={onFilterClick.bind(null, ROUTE_DANCES)}
            >
              Dance!
            </Link>
          </li>
        </ul>

        {this.renderSubTabs()}
      </div>
    );
  }
}

export default Filter;
