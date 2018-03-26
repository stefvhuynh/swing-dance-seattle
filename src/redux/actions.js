export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const NAV_BAR_TOGGLED = "NAV_BAR_TOGGLED";
export const LOGIN_SUBMITTED = "LOGIN_SUBMITTED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const windowResized = (width) => ({
  type: WINDOW_RESIZED,
  payload: { width }
});

export const navBarToggled = () => ({ type: NAV_BAR_TOGGLED });

const loginSucceeded = () => ({
  type: LOGIN_SUCCEEDED
});

const loginFailed = (errorMessage) => ({
  type: LOGIN_FAILED,
  payload: { errorMessage }
});

export const loginSubmitted = (username, password) => {
  const action = { type: LOGIN_SUBMITTED };

  return (dispatch, getState, firebase) => {
    dispatch(action);

    firebase.auth().signInWithEmailAndPassword(username, password).then(() => {
      dispatch(loginSucceeded());
    }).catch((error) => {
      dispatch(loginFailed(error.message));
    });
  };
};
