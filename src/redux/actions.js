export const APP_INITIALIZED = "APP_INITIALIZED";
export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const NAV_BAR_TOGGLED = "NAV_BAR_TOGGLED";
export const LOGIN_SUBMITTED = "LOGIN_SUBMITTED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUBMITTED = "LOGOUT_SUBMITTED";
export const LOGOUT_SUCCEEDED = "LOGOUT_SUCCEEDED";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const EVENT_SUBMITTED = "EVENT_SUBMITTED";
export const EVENT_SUBMISSION_SUCCEEDED = "EVENT_SUBMISSION_SUCCEEDED";
export const EVENT_SUBMISSION_FAILED = "EVENT_SUBMISSION_FAILED";
export const FILTER_SELECTED = "FILTER_SELECTED";
export const SUBFILTER_SELECTED = "SUBFILTER_SELECTED";

export const appInitialized = () => {
  return (dispatch, getState, firebase) => {
    firebase.database().ref("/events").once("value").then((snapshot) => {
      const removeListener = firebase.auth().onAuthStateChanged((user) => {
        dispatch({
          type: APP_INITIALIZED,
          payload: { isLoggedIn: !!user, events: snapshot.val() }
        });

        removeListener();
      });
    });
  };
};

export const windowResized = (width) => ({
  type: WINDOW_RESIZED,
  payload: { width }
});

export const navBarToggled = () => ({ type: NAV_BAR_TOGGLED });

const loginSucceeded = () => ({ type: LOGIN_SUCCEEDED });

const loginFailed = (errorMessage) => ({
  type: LOGIN_FAILED,
  payload: { errorMessage }
});

export const loginSubmitted = (username, password) => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: LOGIN_SUBMITTED });

    firebase.auth().signInWithEmailAndPassword(username, password).then(() => {
      dispatch(loginSucceeded());
    }).catch((error) => {
      dispatch(loginFailed(error.message));
    });
  };
};

const logoutSucceeded = () => ({ type: LOGOUT_SUCCEEDED });

const logoutFailed = (errorMessage) => ({
  type: LOGOUT_FAILED,
  payload: { errorMessage }
});

export const logoutSubmitted = () => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: LOGOUT_SUBMITTED });

    firebase.auth().signOut().then(() => {
      dispatch(logoutSucceeded());
    }).catch((error) => {
      dispatch(logoutFailed(error.message));
    });
  };
};

const eventSubmissionSucceeded = () => ({
  type: EVENT_SUBMISSION_SUCCEEDED
});

const eventSubmissionFailed = () => ({
  type: EVENT_SUBMISSION_FAILED
});

export const eventSubmitted = (details) => {
  return (dispatch, getState, firebase) => {
    dispatch({ type: EVENT_SUBMITTED });

    firebase.database().ref("/events").push().set({
      ...details,
      approved: false
    }).then(() => {
      dispatch(eventSubmissionSucceeded());
    }).catch(() => {
      dispatch(eventSubmissionFailed());
    });
  };
};

export const filterSelected = (filter) => ({
  type: FILTER_SELECTED,
  payload: { filter }
});

export const subfilterSelected = (subfilter) => ({
  type: SUBFILTER_SELECTED,
  payload: { subfilter }
});
