import {
  APP_INITIALIZED,
  EVENT_SUBMITTED,
  EVENT_SUBMISSION_SUCCEEDED,
  FILTER_SELECTED,
  LOGIN_FAILED,
  LOGIN_SUBMITTED,
  LOGIN_SUCCEEDED,
  LOGOUT_FAILED,
  LOGOUT_SUBMITTED,
  LOGOUT_SUCCEEDED,
  NAV_BAR_TOGGLED,
  SUBFILTER_SELECTED,
  WINDOW_RESIZED
} from "./actions";

import {
  FILTER_LEARN,
  MOBILE_BREAKPOINT,
  SUBFILTER_DEFAULT
} from "../constants";

const initialState = {
  auth: {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    loginErrorMessage: "",
    logoutErrorMessage: ""
  },
  events: {
    data: {},
    isSubmitting: false,
    submissionSucceeded: false
  },
  ui: {
    appInitialized: false,
    filter: FILTER_LEARN,
    isMobile: false,
    isNavBarOpen: false,
    page: 1,
    subfilter: SUBFILTER_DEFAULT
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

export const events = (state = initialState.events, action) => {
  const { payload, type } = action;

  switch (type) {
    case APP_INITIALIZED: {
      return { ...state, data: payload.events };
    }

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

export const ui = (state = initialState.ui, action) => {
  const { payload, type } = action;

  switch (type) {
    case APP_INITIALIZED: {
      return { ...state, appInitialized: true };
    }

    case WINDOW_RESIZED: {
      return { ...state, isMobile: payload.width < MOBILE_BREAKPOINT };
    }

    case NAV_BAR_TOGGLED: {
      return { ...state, isNavBarOpen: !state.isNavBarOpen };
    }

    case FILTER_SELECTED: {
      return { ...state, filter: payload.filter, subfilter: SUBFILTER_DEFAULT };
    }

    case SUBFILTER_SELECTED: {
      return { ...state, subfilter: payload.subfilter };
    }

    default: {
      return state;
    }
  }
};
