import { connect } from "react-redux";

import {
  selectExperiencesByDay,
  selectIsMobile,
  selectIsRecurring
} from "../redux/selectors";

import Schedule from "../components/schedule";

const mapStateToProps = (state) => ({
  experiencesByDay: selectExperiencesByDay(state),
  isMobile: selectIsMobile(state),
  recurring: selectIsRecurring(state)
});

export default connect(mapStateToProps)(Schedule);
