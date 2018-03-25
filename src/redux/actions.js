export const WINDOW_RESIZED = "WINDOW_RESIZED";

export const windowResized = (width) => ({
  type: WINDOW_RESIZED,
  payload: { width }
});
