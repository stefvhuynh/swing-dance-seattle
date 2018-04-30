import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  selectIsFetchingExperiences,
  selectIsMobile
} from "../redux/selectors";
import Filter from "../containers/filter";
import Schedule from "../containers/schedule";
import Spinner from "../components/spinner";
import Icon from "../components/icon";

class HomePage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    isMobile: PropTypes.bool
  };

  state = { showInfo: false };

  handleInfoClick = () => {
    const { showInfo } = this.state;
    this.setState({ showInfo: !showInfo });
  }

  render() {
    const { isLoading, isMobile } = this.props;
    const { showInfo } = this.state;

    return (
      <div>
        <div className="bg-dark-grey">
          <div
            className={
              "pd-t-xl pd-b-xl pd-l-md pd-r-md bg-dark-grey font-white " +
                "text-center max-width margin-auto"
            }
          >
            <h1 className="font-emphasis font-xxl mg-b-sm">
              Swing Dance Seattle
            </h1>
            <div className="mg-b-lg lines-spaced">
              Lindy Hop, Balboa, Blues, and Shag in the greater Seattle area
            </div>
            {isMobile && (
              <div
                className="font-green font-sm"
                onClick={this.handleInfoClick}
              >
                <Icon name={showInfo ? "caretDown" : "caretRight"}/>
                <span className="mg-l-xxs">More info</span>
              </div>
            )}
            {(!isMobile || showInfo) && (
              <div className="mg-t-sm font-sm lines-spaced">
                This is a schedule of all classes, workshops, dances, and events
                in the region. This list will be kept up-to-date to the best of
                our ability. For the most accurate information, please click on
                an event to see the event's associated webpage. If you would
                like your event added, altered, or removed, please send us{" "}
                <a
                  href="mailto:revivalrhythmswing@gmail.com"
                  className="bold hover-underline"
                >
                  an email
                </a>.
              </div>
            )}
          </div>
        </div>

        <Filter/>

        <div className="relative">
          <div className="mg-t-lg mg-b-xl max-width margin-auto">
            <Schedule className="animated-fade-in"/>
          </div>

          <Spinner show={isLoading}/>

          <div className="bg-dark-grey">
            <div
              className={
                "no-shrink flex justify-space-between align-center max-width " +
                  "margin-auto pd-t-lg pd-b-lg pd-l-md pd-r-md mg-t-xl " +
                  "font-white"
              }
            >
              <div className="lines-spaced">
                <div className="font-emphasis">Seattle Swing Dance</div>
                <div className="font-sm">revivalrhythmswing@gmail.com</div>
              </div>
              <a href="#" className="font-white font-sm">
                Back to top <Icon name="arrowUp"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectIsFetchingExperiences(state),
  isMobile: selectIsMobile(state)
});

export default connect(mapStateToProps)(HomePage);
