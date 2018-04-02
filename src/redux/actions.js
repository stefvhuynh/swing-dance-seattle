import {
  CATEGORY_CLASS,
  CATEGORY_DANCE,
  CATEGORY_EVENT,
  CATEGORY_WORKSHOP
} from "../constants";

import {
  getAuthorizedUser,
  getExperiences,
  logIn,
  logOut,
  postClass,
  postDance,
  postEvent,
  postWorkshop
} from "../api";

export const APP_INITIALIZED = "APP_INITIALIZED";
export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const NAV_BAR_TOGGLED = "NAV_BAR_TOGGLED";
export const LOGIN_SUBMITTED = "LOGIN_SUBMITTED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUBMITTED = "LOGOUT_SUBMITTED";
export const LOGOUT_SUCCEEDED = "LOGOUT_SUCCEEDED";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const EXPERIENCE_SUBMITTED = "EXPERIENCE_SUBMITTED";
export const EXPERIENCE_SUBMISSION_SUCCEEDED =
  "EXPERIENCE_SUBMISSION_SUCCEEDED";
export const EXPERIENCE_SUBMISSION_FAILED = "EXPERIENCE_SUBMISSION_FAILED";
export const FILTER_SELECTED = "FILTER_SELECTED";
export const SUBFILTER_SELECTED = "SUBFILTER_SELECTED";

export const appInitialized = () => {
  return (dispatch, getState, firebase) => {
    Promise.all([
      getAuthorizedUser(firebase),
      getExperiences(firebase)
    ]).then((values) => {
      const [user, experiences] = values;

      dispatch({
        type: APP_INITIALIZED,
        payload: { isLoggedIn: !!user, experiences }
      });
    });
  };
};

export const windowResized = (width) => {
  return { type: WINDOW_RESIZED, payload: { width } };
};

export const navBarToggled = () => {
  return { type: NAV_BAR_TOGGLED };
};

const loginSucceeded = () => {
  return { type: LOGIN_SUCCEEDED };
};

const loginFailed = (errorMessage) => {
  return { type: LOGIN_FAILED, payload: { errorMessage } };
};

export const loginSubmitted = (username, password) => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: LOGIN_SUBMITTED });

    logIn(firebase, username, password)
      .then(() => dispatch(loginSucceeded()))
      .catch((error) => dispatch(loginFailed(error.message)));
  };
};

const logoutSucceeded = () => {
  return { type: LOGOUT_SUCCEEDED };
};

const logoutFailed = (errorMessage) => {
  return { type: LOGOUT_FAILED, payload: { errorMessage } };
};

export const logoutSubmitted = () => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: LOGOUT_SUBMITTED });

    logOut(firebase)
      .then(() => dispatch(logoutSucceeded()))
      .catch((error) => dispatch(logoutFailed(error.message)));
  };
};

const experienceSubmissionSucceeded = () => {
  return { type: EXPERIENCE_SUBMISSION_SUCCEEDED };
};

const experienceSubmissionFailed = () => {
  return { type: EXPERIENCE_SUBMISSION_FAILED };
};

export const experienceSubmitted = (details, experienceCategory) => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: EXPERIENCE_SUBMITTED });

    let postExperience;
    switch (experienceCategory) {
      case CATEGORY_CLASS: {
        postExperience = postClass;
        break;
      }
      case CATEGORY_DANCE: {
        postExperience = postDance;
        break;
      }
      case CATEGORY_EVENT: {
        postExperience = postEvent;
        break;
      }
      case CATEGORY_WORKSHOP: {
        postExperience = postWorkshop;
        break;
      }
    }

    postExperience(firebase, details)
      .then(() => dispatch(experienceSubmissionSucceeded()))
      .catch(() => dispatch(experienceSubmissionFailed()));
  };
};

export const filterSelected = (filter) => {
  return { type: FILTER_SELECTED, payload: { filter } };
};

export const subfilterSelected = (subfilter) => {
  return { type: SUBFILTER_SELECTED, payload: { subfilter } };
};
