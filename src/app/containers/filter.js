import { connect } from "react-redux";

import { selectIsMobile, selectRoute } from "../redux/selectors";
import { filterSelected } from "../redux/actions";
import Filter from "../components/filter";

const mapStateToProps = (state) => ({
  currentRoute: selectRoute(state),
  isMobile: selectIsMobile(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (route) => dispatch(filterSelected(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
