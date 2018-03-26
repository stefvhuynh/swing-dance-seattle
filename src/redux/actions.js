export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const NAV_BAR_TOGGLED = "NAV_BAR_TOGGLED";
export const LOGIN_SUBMITTED = "LOGIN_SUBMITTED";

export const windowResized = (width) => ({
  type: WINDOW_RESIZED,
  payload: { width }
});

export const navBarToggled = () => ({ type: NAV_BAR_TOGGLED });

export const loginSubmitted = (username, password) => {
  return {
    type: LOGIN_SUBMITTED,
    payload: { username, password }
  };
};
