import React from "react";
import PropTypes from "prop-types";

import Icon from "./icon";

class Spinner extends React.Component {
  static propTypes = {
    minimumShowTime: PropTypes.number,
    show: PropTypes.bool
  };

  static defaultProps = {
    minimumShowTime: 1000
  };

  state = {
    displaySpinner: false,
    startTime: Date.now()
  };

  componentWillReceiveProps(newProps) {
    const { minimumShowTime, show } = newProps;
    const { startTime } = this.state;

    if (show) {
      this.setState({ displaySpinner: true, startTime: Date.now() });
      return;
    }

    const timeShown = Date.now() - startTime;

    if (timeShown < minimumShowTime) {
      window.setTimeout(
        () => this.setState({ displaySpinner: false }),
        minimumShowTime - timeShown
      );
    } else {
      this.setState({ displaySpinner: false });
    }
  }

  render() {
    const { displaySpinner } = this.state;

    return displaySpinner
      ? (
        <div className="absolute top full-height full-width bg-off-white">
          <div className="flex justify-center mg-t-xxl">
            <Icon
              className="font-xxxl font-green animation-compass"
              name="compass"
            />
          </div>
        </div>
      )
      : null;
  }
}

export default Spinner;
