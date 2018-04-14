import { connect } from "react-redux";

import { selectIsMobile, selectRoute } from "../redux/selectors";
import Filter from "../components/filter";

const mapStateToProps = (state) => ({
  currentRoute: selectRoute(state),
  isMobile: selectIsMobile(state)
});

export default connect(mapStateToProps)(Filter);
