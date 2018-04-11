import { connect } from "react-redux";

import {
  selectFilter,
  selectIsMobile,
  selectSubfilter
} from "../redux/selectors";

import { filterSelected, subfilterSelected } from "../redux/actions";
import Filter from "../components/filter";

const mapStateToProps = (state) => ({
  isMobile: selectIsMobile(state),
  selectedFilter: selectFilter(state),
  selectedSubfilter: selectSubfilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (filter) => dispatch(filterSelected(filter)),
  onSubfilterClick: (subfilter) => dispatch(subfilterSelected(subfilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
