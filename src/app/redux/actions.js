import {
  CATEGORY_CLASS,
  CATEGORY_DANCE,
  CATEGORY_EVENT,
  CATEGORY_WORKSHOP
} from "../constants";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_WORKSHOPS
} from "../routes";

import {
  getAuthorizedUser,
  getClasses,
  getDances,
  getEvents,
  getWorkshops,
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
export const EXPERIENCES_FETCH_INITIATED = "EXPERIENCES_FETCH_INITIATED";
export const EXPERIENCES_FETCH_SUCCEEDED = "EXPERIENCES_FETCH_SUCCEEDED";
export const EXPERIENCES_FETCH_FAILED = "EXPERIENCES_FETCH_FAILED";

export const appInitialized = () => {
  return (dispatch, getState, firebase) => {
    getAuthorizedUser(firebase).then((user) => {
      dispatch({
        type: APP_INITIALIZED,
        payload: { isLoggedIn: !!user }
      });
    });
  };
};

const experiencesFetchSucceeded = (route, experiences) => {
  return {
    type: EXPERIENCES_FETCH_SUCCEEDED,
    payload: { experiences, route }
  };
};

const experiencesFetchFailed = (error) => {
  return {
    type: EXPERIENCES_FETCH_FAILED,
    payload: { error }
  };
};

export const filterSelected = (route) => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: FILTER_SELECTED });

    const { data, lastFetch } = getState().experiences;
    let getExperiences;
    let currentExperiences;

    switch (route) {
      case ROUTE_CLASSES: {
        getExperiences = getClasses;
        currentExperiences = data.classes;
        break;
      }
      case ROUTE_DANCES: {
        getExperiences = getDances;
        currentExperiences = data.dances;
        break;
      }
      case ROUTE_EVENTS: {
        getExperiences = getEvents;
        currentExperiences = data.events;
        break;
      }
      case ROUTE_WORKSHOPS: {
        getExperiences = getWorkshops;
        currentExperiences = data.workshops;
        break;
      }
    }

    if (
      Object.keys(currentExperiences).length > 0
        && lastFetch < Date.now()
        || !getExperiences
    ) {
      return;
    }

    dispatch({ type: EXPERIENCES_FETCH_INITIATED });

    return getExperiences(firebase).then((experiences) => {
      dispatch(experiencesFetchSucceeded(route, experiences));
    }).catch((error) => {
      dispatch(experiencesFetchFailed(error));
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
