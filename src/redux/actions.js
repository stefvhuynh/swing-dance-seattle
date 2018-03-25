export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const NAV_BAR_TOGGLED = "NAV_BAR_TOGGLED";

export const windowResized = (width) => ({
  type: WINDOW_RESIZED,
  payload: { width }
});

export const navBarToggled = () => ({ type: NAV_BAR_TOGGLED });
