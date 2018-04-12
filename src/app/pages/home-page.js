import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectIsAppInitialized } from "../redux/selectors";
import Filter from "../containers/filter";
import Schedule from "../containers/schedule";
import Spinner from "../components/spinner";

class HomePage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool
  };

  render() {
    const { isLoading } = this.props;

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
            <div className="mg-b-xl lines-spaced">
              Lindy Hop, Balboa, Blues, and Shag in the greater Seattle area
            </div>
            <div className="font-sm lines-spaced">
              This is a schedule of all classes, workshops, dances, and events
              in the region. This list will be kept up-to-date to the best of
              our ability. For the most accurate information, please click on an
              event to see the event's associated webpage. If you would like
              your event added, altered, or removed, please send us{" "}
              <a
                href="mailto:revivalrhythmswing@gmail.com"
                className="bold hover-underline"
              >
                an email
              </a>.
            </div>
          </div>
        </div>

        <Filter/>

        <div className="mg-t-lg mg-b-xl max-width margin-auto">
          {isLoading ? <Spinner/> : <Schedule className="animated-fade-in"/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: !selectIsAppInitialized(state)
});

export default connect(mapStateToProps)(HomePage);
