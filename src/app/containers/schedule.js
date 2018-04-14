import { connect } from "react-redux";

import {
  selectExperiencesByDay,
  selectIsMobile,
  selectIsRecurringExperience
} from "../redux/selectors";

import Schedule from "../components/schedule";

const mapStateToProps = (state) => ({
  experiencesByDay: selectExperiencesByDay(state),
  isMobile: selectIsMobile(state),
  recurring: selectIsRecurringExperience(state)
});

export default connect(mapStateToProps)(Schedule);
