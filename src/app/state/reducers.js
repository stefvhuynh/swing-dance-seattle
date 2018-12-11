import { CLASSES_REQUESTED, CLASSES_RECEIVED, WINDOW_RESIZED } from "./types";

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
  },
  ui: {
    windowWidth: 0
  }
};

export const ui = (state = initialState.ui, action) => {
  const { payload, type } = action;

  switch (type) {
    case WINDOW_RESIZED: {
      return { ...state, windowWidth: payload.width };
    }
    default: {
      return state;
    }
  }
};

export const classes = (state = initialState.classes, action) => {
  const { payload, type } = action;

  switch (type) {
    case CLASSES_REQUESTED: {
      return { ...state, fetching: true };
    }
    case CLASSES_RECEIVED: {
      return {
        ...state,
        data: payload.classes,
        fetched: true,
        fetching: false
      };
    }
    default: {
      return state;
    }
  }
};
