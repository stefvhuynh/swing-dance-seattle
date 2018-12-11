import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "../constants";
import { fetchClasses, fetchDances, fetchEvents } from "../api";
import {
  serializeClasses,
  serializeDances,
  serializeEvents
} from "../serializers";

import {
  CLASSES_REQUESTED,
  CLASSES_REQUEST_FAILED,
  CLASSES_REQUEST_SUCCEEDED,
  DANCES_REQUESTED,
  DANCES_REQUEST_SUCCEEDED,
  DANCES_REQUEST_FAILED,
  EVENTS_REQUESTED,
  EVENTS_REQUEST_SUCCEEDED,
  EVENTS_REQUEST_FAILED,
  NAVIGATED,
  WINDOW_RESIZED
} from "./types";
import {
  selectClassesNeedFetching,
  selectDancesNeedFetching,
  selectEventsNeedFetching
} from "./selectors";

const ROUTE_DATA_MAP = {
  [ROUTE_HOME]: {
    fetchData: fetchClasses,
    requestType: CLASSES_REQUESTED,
    requestSucceededType: CLASSES_REQUEST_SUCCEEDED,
    requestFailedType: CLASSES_REQUEST_FAILED,
    selectNeedsFetching: selectClassesNeedFetching,
    serialize: serializeClasses
  },
  [ROUTE_CLASSES]: {
    fetchData: fetchClasses,
    requestType: CLASSES_REQUESTED,
    requestSucceededType: CLASSES_REQUEST_SUCCEEDED,
    requestFailedType: CLASSES_REQUEST_FAILED,
    selectNeedsFetching: selectClassesNeedFetching,
    serialize: serializeClasses
  },
  [ROUTE_DANCES]: {
    fetchData: fetchDances,
    requestType: DANCES_REQUESTED,
    requestSucceededType: DANCES_REQUEST_SUCCEEDED,
    requestFailedType: DANCES_REQUEST_FAILED,
    selectNeedsFetching: selectDancesNeedFetching,
    serialize: serializeDances
  },
  [ROUTE_EVENTS]: {
    fetchData: fetchEvents,
    requestType: EVENTS_REQUESTED,
    requestSucceededType: EVENTS_REQUEST_SUCCEEDED,
    requestFailedType: EVENTS_REQUEST_FAILED,
    selectNeedsFetching: selectEventsNeedFetching,
    serialize: serializeEvents
  }
};

export const navigated = path => (dispatch, getState, getFirebase) => {
  dispatch({
    type: NAVIGATED,
    payload: { path }
  });

  const {
    fetchData,
    requestType,
    requestSucceededType,
    requestFailedType,
    selectNeedsFetching,
    serialize
  } = ROUTE_DATA_MAP[path];

  if (!fetchData || !selectNeedsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({ type: requestType });

  return fetchData(getFirebase())
    .then(data =>
      dispatch({
        type: requestSucceededType,
        payload: { data: serialize(data) }
      })
    )
    .catch(error =>
      dispatch({
        type: requestFailedType,
        payload: { error }
      })
    );
};

export const windowResized = width => ({
  type: WINDOW_RESIZED,
  payload: { width }
});
