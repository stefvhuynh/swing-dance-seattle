import {
  SCREEN_WIDTH_CHANGED, CLASSES_REQUESTED, CLASSES_RECEIVED
} from "./types";

const initialState = {
  classes: {
    fetched: false,
    fetching: true,
    data: []
  },
  dances: {},
  events: {},
  ui: {
    screenWidth: 0
  }
};

export const ui = (state = initialState.ui, action) => {
  const { payload, type } = action;

  switch (type) {
    case SCREEN_WIDTH_CHANGED: {
      return { ...state, screenWidth: payload.width };
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
        fetching: false,
        fetched: true,
        data: payload.classes
      };
    }
    default: {
      return state;
    }
  }
};
