import {
  APP_INITIALIZED,
  EXPERIENCE_SUBMITTED,
  EXPERIENCE_SUBMISSION_SUCCEEDED,
  EXPERIENCES_FETCH_FAILED,
  EXPERIENCES_FETCH_INITIATED,
  EXPERIENCES_FETCH_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_SUBMITTED,
  LOGIN_SUCCEEDED,
  LOGOUT_FAILED,
  LOGOUT_SUBMITTED,
  LOGOUT_SUCCEEDED,
  WINDOW_RESIZED
} from "./actions";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "../constants";

const initialState = {
  auth: {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    loginErrorMessage: "",
    logoutErrorMessage: ""
  },
  experiences: {
    data: {
      classes: {},
      dances: {},
      events: {}
    },
    isFetching: false,
    isSubmitting: false,
    lastFetch: null,
    submissionSucceeded: false
  },
  ui: {
    isAppInitialized: false,
    windowWidth: 0
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

export const experiences = (state = initialState.experiences, action) => {
  const { payload, type } = action;

  switch (type) {
    case EXPERIENCES_FETCH_INITIATED: {
      return { ...state, isFetching: true };
    }

    case EXPERIENCES_FETCH_SUCCEEDED: {
      let { data } = state;

      switch (payload.route) {
        case ROUTE_HOME:
        case ROUTE_CLASSES: {
          data = { ...data, classes: payload.experiences };
          break;
        }
        case ROUTE_DANCES: {
          data = { ...data, dances: payload.experiences };
          break;
        }
        case ROUTE_EVENTS: {
          data = { ...data, events: payload.experiences };
          break;
        }
      }

      return { ...state, isFetching: false, lastFetch: Date.now(), data };
    }

    case EXPERIENCES_FETCH_FAILED: {
      return { ...state, isFetching: false };
    }

    case EXPERIENCE_SUBMITTED: {
      return { ...state, isSubmitting: true };
    }

    case EXPERIENCE_SUBMISSION_SUCCEEDED: {
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
      return { ...state, isAppInitialized: true };
    }

    case WINDOW_RESIZED: {
      return { ...state, windowWidth: payload.width };
    }

    default: {
      return state;
    }
  }
};
