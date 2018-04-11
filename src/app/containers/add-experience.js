import { connect } from "react-redux";

import { experienceSubmitted } from "../redux/actions";
import { selectExperienceSubmissionSucceeded } from "../redux/selectors";
import AddExperience from "../components/add-experience";
import { serializeExperience } from "../utils";

const mapStateToProps = (state) => ({
  submissionSucceeded: selectExperienceSubmissionSucceeded(state)
});

const mapDispatchToProps = (dispatch) => ({
  onExperienceSubmit: (details) => {
    const serializedDetails = serializeExperience(details);
    dispatch(experienceSubmitted(
      serializedDetails,
      details.category
    ));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);
