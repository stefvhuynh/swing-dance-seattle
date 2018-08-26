import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {
  DANCE_STYLE_MAP,
  DAY_MAP,
  RECURRENCE_TIME_EVERY,
  RECURRENCE_TIME_MAP
} from "../constants";

import { getDateDisplay, getValidLink } from "../utils";

const Conditional = ({ children, condition }) => {
  return condition ? children : null;
};

class Experience extends React.Component {
  static propTypes = {
    danceStyles: PropTypes.oneOf([PropTypes.string, PropTypes.array]),
    dateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    hasDropInClass: PropTypes.bool,
    hasLiveMusic: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
    neighborhood: PropTypes.string,
    organization: PropTypes.string,
    recurrenceDay: PropTypes.number,
    recurrenceTime: PropTypes.string,
    time: PropTypes.string,
    venue: PropTypes.string,
    weekendEvent: PropTypes.bool
  };

  static defaultProps = {
    danceStyles: []
  };

  state = { isHovering: false };

  handleMouseEnter = () => {
    this.setState({ isHovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovering: false });
  }

  render() {
    const {
      danceStyles,
      dateEnd,
      dateStart,
      hasDropInClass,
      hasLiveMusic,
      link,
      name,
      neighborhood,
      organization,
      recurrenceDay,
      recurrenceTime,
      time,
      venue,
      weekendEvent
    } = this.props;

    const { isHovering } = this.state;

    return (
      <a
        className="flex column pd-md bg-white lines-spaced font-black"
        href={getValidLink(link)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        target="_blank"
      >
        <div className="flex align-center mg-b-xxs">
          <div className="basis-80">
            <Conditional condition={neighborhood}>
              <div className="bold uppercase font-xs font-grey">
                {neighborhood}
              </div>
            </Conditional>

            <h3
              className={classNames("bold font-lg", { underline: isHovering })}
            >
              {name}
            </h3>

            <Conditional condition={organization}>
              <h2 className="font-sm font-grey">{organization}</h2>
            </Conditional>

            <Conditional condition={venue && venue !== organization}>
              <div className="font-sm font-grey">@ {venue}</div>
            </Conditional>
          </div>

          <div className="text-right basis-20">
            <Conditional
              condition={recurrenceDay !== undefined && recurrenceTime}
            >
              <div>
                {RECURRENCE_TIME_MAP[recurrenceTime]}
                {
                  recurrenceTime !== RECURRENCE_TIME_EVERY
                    && ` ${DAY_MAP[recurrenceDay]}s`
                }
              </div>
            </Conditional>

            <Conditional condition={dateStart}>
              <div>
                {getDateDisplay(dateStart)}
                <Conditional condition={dateEnd !== dateStart}>
                  <span> - <span className="no-wrap">
                    {getDateDisplay(dateEnd)}
                  </span></span>
                </Conditional>
              </div>
            </Conditional>

            <Conditional condition={time}><div>{time}</div></Conditional>
          </div>
        </div>

        <ul className="font-sm italic font-grey">
          <Conditional condition={weekendEvent}>
            <li>&ndash; Weekend event</li>
          </Conditional>

          <Conditional condition={hasLiveMusic}>
            <li>&ndash; Live music!</li>
          </Conditional>

          <Conditional condition={danceStyles && danceStyles.length > 0}>
            <li>&ndash;&nbsp;
              {
                Array.isArray(danceStyles)
                  ? danceStyles
                    .map((danceStyle) => DANCE_STYLE_MAP[danceStyle])
                    .join(", ")
                  : DANCE_STYLE_MAP[danceStyles]
              }
            </li>
          </Conditional>

          <Conditional condition={hasDropInClass}>
            <li>&ndash; Drop-in class</li>
          </Conditional>
        </ul>
      </a>
    );
  }
}

export default Experience;
