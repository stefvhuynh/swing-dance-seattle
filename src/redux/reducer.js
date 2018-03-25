import { WINDOW_RESIZED } from "./actions";
import { isMobile } from "../utils";

const initialState = {
  events: {
    data: [],
    isFetching: false
  },
  users: {
    data: [],
    isFetching: false
  },
  ui: {
    isMobile: false,
    filter: "",
    page: 1
  }
};

export const events = (state = initialState.events) => {
  return state;
};

export const users = (state = initialState.users) => {
  return state;
};

export const ui = (state = initialState.ui, action) => {
  const { payload, type } = action;

  switch (type) {
    case WINDOW_RESIZED: {
      const { width } = payload;
      return { ...state, isMobile: isMobile(width) };
    }

    default: {
      return state;
    }
  }
};
