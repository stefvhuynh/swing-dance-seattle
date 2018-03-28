import { connect } from "react-redux";

import { eventSubmitted } from "../redux/actions";
import { selectEventSubmissionSucceeded } from "../redux/reducer";
import AddEvent from "../components/add-event";
import { isRecurringCategory } from "../utils";

const mapStateToProps = (state) => ({
  submissionSucceeded: selectEventSubmissionSucceeded(state)
});

const mapDispatchToProps = (dispatch) => ({
  onEventSubmit: (details) => {
    const isRecurring = isRecurringCategory(details.category);
    const trimmedDetails = {
      ...details,
      dateStart: isRecurring ? null : details.dateStart,
      dateEnd: isRecurring ? null : details.dateEnd,
      recurrenceDay: isRecurring ? details.recurrenceDay : null,
      recurrenceTime: isRecurring ? details.recurrenceTime : null
    };

    dispatch(eventSubmitted(trimmedDetails));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);
