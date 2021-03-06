import {
  CLASSES_REQUESTED,
  CLASSES_REQUEST_SUCCEEDED,
  DANCES_REQUESTED,
  DANCES_REQUEST_SUCCEEDED,
  EVENTS_REQUESTED,
  EVENTS_REQUEST_SUCCEEDED
} from "./types";

const initialState = {
  classes: {
    data: [],
    fetched: false,
    fetching: false
  },
  dances: {
    data: [],
    fetched: false,
    fetching: false
  },
  events: {
    data: [],
    fetched: false,
    fetching: false
  }
};

export const classes = (state = initialState.classes, action) => {
  const { payload, type } = action;

  switch (type) {
    case CLASSES_REQUESTED: {
      return { ...state, fetching: true };
    }
    case CLASSES_REQUEST_SUCCEEDED: {
      return {
        ...state,
        data: payload.data,
        fetched: true,
        fetching: false
      };
    }
    default: {
      return state;
    }
  }
};

export const dances = (state = initialState.dances, action) => {
  const { payload, type } = action;

  switch (type) {
    case DANCES_REQUESTED: {
      return { ...state, fetching: true };
    }
    case DANCES_REQUEST_SUCCEEDED: {
      return {
        ...state,
        data: payload.data,
        fetched: true,
        fetching: false
      };
    }
    default: {
      return state;
    }
  }
};

export const events = (state = initialState.events, action) => {
  const { payload, type } = action;

  switch (type) {
    case EVENTS_REQUESTED: {
      return { ...state, fetching: true };
    }
    case EVENTS_REQUEST_SUCCEEDED: {
      return {
        ...state,
        data: payload.data,
        fetched: true,
        fetching: false
      };
    }
    default: {
      return state;
    }
  }
};
