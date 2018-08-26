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

class Experience extends React.Component {
  static propTypes = {
    danceStyles: PropTypes.array,
    dateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    hasDropInClass: PropTypes.bool,
    hasLiveMusic: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
    neighborhood: PropTypes.string,
    organization: PropTypes.string,
    recurrenceDay: PropTypes.number,
    // recurrenceTime: PropTypes.string,
    recurrenceTimes: PropTypes.array,
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
      recurrenceTimes,
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
          <div className="basis-70">
            {neighborhood && (
              <div className="bold uppercase font-xs font-grey">
                {neighborhood}
              </div>
            )}

            <h3
              className={classNames("bold font-lg", { underline: isHovering })}
            >
              {name}
            </h3>

            {organization && (
              <h2 className="font-sm font-grey">{organization}</h2>
            )}

            {venue && venue !== organization && (
              <div className="font-sm font-grey">@ {venue}</div>
            )}
          </div>

          <div className="text-right basis-30">
            {
              recurrenceDay !== undefined
                && recurrenceTimes
                && recurrenceTimes.length > 0
                && (
                  <div>
                    {
                      recurrenceTimes.map((recurrenceTime, index) => {
                        if (index === recurrenceTimes.length - 1) {
                          return RECURRENCE_TIME_MAP[recurrenceTime];
                        // eslint-disable-next-line no-magic-numbers
                        } else if (index === recurrenceTimes.length - 2) {
                          return `${RECURRENCE_TIME_MAP[recurrenceTime]} & `;
                        } else {
                          return `${RECURRENCE_TIME_MAP[recurrenceTime]}, `;
                        }
                      })
                    }
                    {
                      recurrenceTimes[0] !== RECURRENCE_TIME_EVERY
                        && ` ${DAY_MAP[recurrenceDay]}s`
                    }
                  </div>
                )
            }

            {dateStart && (
              <div>
                {getDateDisplay(dateStart)}
                {dateEnd !== dateStart && (
                  <span> - <span className="no-wrap">
                    {getDateDisplay(dateEnd)}
                  </span></span>
                )}
              </div>
            )}

            {time && <div>{time}</div>}
          </div>
        </div>

        <ul className="font-sm italic font-grey">
          {weekendEvent && <li>&ndash; Weekend event</li>}
          {hasLiveMusic && <li>&ndash; Live music!</li>}

          {danceStyles && danceStyles.length > 0 && (
            <li>&ndash;&nbsp;
              {
                danceStyles
                  .map((danceStyle) => DANCE_STYLE_MAP[danceStyle])
                  .join(", ")
              }
            </li>
          )}

          {hasDropInClass && <li>&ndash; Drop-in class</li>}
        </ul>
      </a>
    );
  }
}

export default Experience;
