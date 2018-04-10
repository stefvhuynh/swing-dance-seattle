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
        <div
          className={
            "pd-t-xl pd-b-xl pd-l-md pd-r-md bg-dark-grey font-white " +
              "text-center"
          }
        >
          <h1 className="font-emphasis font-xxl mg-b-md">
            Swing Dance Seattle
          </h1>
          <div className="lines-spaced">
            A schedule of all things Lindy Hop, Balboa, Blues, and Shag
            related in the greater Seattle area
          </div>
        </div>

        <Filter/>

        <div className="mg-t-lg max-width margin-auto">
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
