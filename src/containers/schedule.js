import { connect } from "react-redux";

import {
  selectExperiencesByDay,
  selectIsMaxWidth,
  selectIsMobile,
  selectIsRecurring
} from "../redux/selectors";

import Schedule from "../components/schedule";

const mapStateToProps = (state) => ({
  experiencesByDay: selectExperiencesByDay(state),
  isMaxWidth: selectIsMaxWidth(state),
  isMobile: selectIsMobile(state),
  recurring: selectIsRecurring(state)
});

export default connect(mapStateToProps)(Schedule);
