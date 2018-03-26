import { NAV_BAR_TOGGLED, WINDOW_RESIZED } from "./actions";
import { MOBILE_BREAKPOINT } from "../constants";

const initialState = {
  events: {
    data: [],
    isFetching: false
  },
  auth: {
    isAuthenticated: false
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

export const auth = (state = initialState.auth) => {
  return state;
};

export const ui = (state = initialState.ui, action) => {
  const { payload, type } = action;

  switch (type) {
    case WINDOW_RESIZED: {
      const { width } = payload;
      return { ...state, isMobile: width < MOBILE_BREAKPOINT };
    }

    case NAV_BAR_TOGGLED: {
      return { ...state, isNavBarOpen: !state.isNavBarOpen };
    }

    default: {
      return state;
    }
  }
};

export const isMobile = (state) => state.ui.isMobile;
export const isNavBarOpen = (state) => state.ui.isNavBarOpen;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
