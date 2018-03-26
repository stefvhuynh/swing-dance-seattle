export const APP_INITIALIZED = "APP_INITIALIZED";
export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const NAV_BAR_TOGGLED = "NAV_BAR_TOGGLED";
export const LOGIN_SUBMITTED = "LOGIN_SUBMITTED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUBMITTED = "LOGOUT_SUBMITTED";
export const LOGOUT_SUCCEEDED = "LOGOUT_SUCCEEDED";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const appInitialized = () => {
  return (dispatch, getState, firebase) => {
    const removeListener = firebase.auth().onAuthStateChanged((user) => {
      dispatch({
        type: APP_INITIALIZED,
        payload: { isLoggedIn: !!user }
      });

      removeListener();
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
