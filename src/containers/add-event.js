import { connect } from "react-redux";

import { eventSubmitted } from "../redux/actions";
import { selectEventSubmissionSucceeded } from "../redux/reducer";
import AddEvent from "../components/add-event";

const mapStateToProps = (state) => ({
  submissionSucceeded: selectEventSubmissionSucceeded(state)
});

const mapDispatchToProps = (dispatch) => ({
  onEventSubmit: (details) => {
    const { isRecurring } = details;
    const trimmedDetails = {
      ...details,
      date: isRecurring ? null : details.date,
      recurrenceDay: isRecurring ? details.recurrenceDay : null,
      recurrenceTime: isRecurring ? details.recurrenceTime : null
    };

    dispatch(eventSubmitted(trimmedDetails));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
