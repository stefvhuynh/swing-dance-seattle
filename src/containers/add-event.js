import { connect } from "react-redux";

import { eventSubmitted } from "../redux/actions";
import { selectEventSubmissionSucceeded } from "../redux/selectors";
import AddEvent from "../components/add-event";
import { trimMap } from "../utils";

const mapStateToProps = (state) => ({
  submissionSucceeded: selectEventSubmissionSucceeded(state)
});

const mapDispatchToProps = (dispatch) => ({
  onEventSubmit: (details) => {
    const trimmedDetails = trimMap(details);
    dispatch(eventSubmitted(trimmedDetails));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
