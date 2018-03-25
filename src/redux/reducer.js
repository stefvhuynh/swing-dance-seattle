import { NAV_BAR_TOGGLED, WINDOW_RESIZED } from "./actions";
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
    filter: "",
    isMobile: false,
    isNavBarOpen: false,
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

    case NAV_BAR_TOGGLED: {
      return { ...state, isNavBarOpen: !state.isNavBarOpen };
    }

    default: {
      return state;
    }
  }
};

export const isNavBarOpen = (state) => state.ui.isNavBarOpen;
