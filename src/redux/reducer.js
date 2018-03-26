import {
  APP_INITIALIZED,
  EVENT_SUBMITTED,
  EVENT_SUBMISSION_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_SUBMITTED,
  LOGIN_SUCCEEDED,
  LOGOUT_FAILED,
  LOGOUT_SUBMITTED,
  LOGOUT_SUCCEEDED,
  NAV_BAR_TOGGLED,
  WINDOW_RESIZED
} from "./actions";
import { MOBILE_BREAKPOINT } from "../constants";

const initialState = {
  auth: {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    loginErrorMessage: "",
    logoutErrorMessage: ""
  },
  events: {
    data: [],
    isFetching: false,
    isSubmitting: false,
    submissionSucceeded: false
  },
  ui: {
    filter: "",
    isMobile: false,
    isNavBarOpen: false,
    page: 1
  }
};

export const events = (state = initialState.events, action) => {
  const { type } = action;

  switch (type) {
    case EVENT_SUBMITTED: {
      return { ...state, isSubmitting: true };
    }

    case EVENT_SUBMISSION_SUCCEEDED: {
      return { ...state, isSubmitting: false, submissionSucceeded: true };
    }

    default: {
      return state;
    }
  }
};

export const auth = (state = initialState.auth, action) => {
  const { payload, type } = action;

  switch (type) {
    case APP_INITIALIZED: {
      return { ...state, isLoggedIn: payload.isLoggedIn };
    }

    case LOGIN_SUBMITTED: {
      return { ...state, isLoggingIn: true };
    }

    case LOGIN_SUCCEEDED: {
      return { ...state, isLoggingIn: false, isLoggedIn: true };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        isLoggingIn: false,
        loginErrorMessage: payload.errorMessage
      };
    }

    case LOGOUT_SUBMITTED: {
      return { ...state, isLoggingOut: true };
    }

    case LOGOUT_SUCCEEDED: {
      return { ...state, isLoggingOut: false, isLoggedIn: false };
    }

    case LOGOUT_FAILED: {
      return {
        ...state,
        isLoggingOut: false,
        logoutErrorMessage: payload.errorMessage
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

export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;
export const selectEventSubmissionSucceeded = (state) => {
  return state.events.submissionSucceeded;
};
