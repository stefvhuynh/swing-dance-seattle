import {
  CLASSES_RECEIVED,
  CLASSES_REQUESTED,
  NAVIGATED,
  WINDOW_RESIZED
} from "./types";
import { ROUTE_CLASSES, ROUTE_HOME } from "../constants";
import { fetchClasses } from "../api";
import { serializeClasses } from "../serializers";

export const windowResized = width => ({
  type: WINDOW_RESIZED,
  payload: { width }
});

export const navigated = path => (dispatch, getState, getFirebase) => {
  dispatch({ type: NAVIGATED });

  let fetchPromise;

  switch (path) {
    case ROUTE_HOME:
    case ROUTE_CLASSES: {
      fetchPromise = fetchClasses;
      break;
    }
  }

  if (fetchPromise) {
    dispatch({ type: CLASSES_REQUESTED });

    return fetchPromise(getFirebase()).then(classes =>
      dispatch({
        type: CLASSES_RECEIVED,
        payload: { classes: serializeClasses(classes) }
      })
    );
  }

  return Promise.resolve();
};
