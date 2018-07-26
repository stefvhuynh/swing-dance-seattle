import { ONE_HOUR } from "../constants";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "../routes";

import {
  getAuthorizedUser,
  getClasses,
  getDances,
  getEvents,
  logIn,
  logOut
} from "../api";

export const APP_INITIALIZED = "APP_INITIALIZED";
export const WINDOW_RESIZED = "WINDOW_RESIZED";

export const LOGIN_SUBMITTED = "LOGIN_SUBMITTED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_SUBMITTED = "LOGOUT_SUBMITTED";
export const LOGOUT_SUCCEEDED = "LOGOUT_SUCCEEDED";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

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
    let currentExperiences = {};
    let getExperiences;

    switch (route) {
      case ROUTE_HOME:
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
    }

    if (
      Object.keys(currentExperiences).length > 0
        && Date.now() - lastFetch < ONE_HOUR
        || !getExperiences
    ) {
      return Promise.resolve();
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
