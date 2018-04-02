import { connect } from "react-redux";

import { eventSubmitted } from "../redux/actions";
import { selectEventSubmissionSucceeded } from "../redux/selectors";
import AddEvent from "../components/add-event";
import { isRecurringCategory, serializeEvent } from "../utils";

const mapStateToProps = (state) => ({
  submissionSucceeded: selectEventSubmissionSucceeded(state)
});

const mapDispatchToProps = (dispatch) => ({
  onEventSubmit: (details) => {
    const serializedDetails = serializeEvent(details);
    dispatch(eventSubmitted(
      serializedDetails,
      isRecurringCategory(details.category)
    ));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
