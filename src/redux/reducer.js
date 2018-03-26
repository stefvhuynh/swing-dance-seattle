import {
  APP_INITIALIZED,
  LOGIN_FAILED,
  LOGIN_SUBMITTED,
  LOGIN_SUCCEEDED,
  NAV_BAR_TOGGLED,
  WINDOW_RESIZED
} from "./actions";
import { MOBILE_BREAKPOINT } from "../constants";

const initialState = {
  auth: {
    errorMessage: "",
    isAuthenticating: false,
    isAuthenticated: false
  },
  events: {
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

export const auth = (state = initialState.auth, action) => {
  const { payload, type } = action;

  switch (type) {
    case APP_INITIALIZED: {
      return { ...state, isAuthenticated: true };
    }

    case LOGIN_SUBMITTED: {
      return { ...state, isAuthenticating: true };
    }

    case LOGIN_SUCCEEDED: {
      return { ...state, isAuthenticating: false, isAuthenticated: true };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: payload.errorMessage
      };
    }

    default: {
      return state;
    }
  }
};

export const ui = (state = initialState.ui, action) => {
  const { payload, type } = action;

  switch (type) {
    case WINDOW_RESIZED: {
      return { ...state, isMobile: payload.width < MOBILE_BREAKPOINT };
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
export const getAuthenticationError = (state) => state.auth.errorMessage;
