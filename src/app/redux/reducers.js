import {
  APP_INITIALIZED,
  EXPERIENCE_SUBMITTED,
  EXPERIENCE_SUBMISSION_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_SUBMITTED,
  LOGIN_SUCCEEDED,
  LOGOUT_FAILED,
  LOGOUT_SUBMITTED,
  LOGOUT_SUCCEEDED,
  NAV_BAR_TOGGLED,
  WINDOW_RESIZED
} from "./actions";

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
      events: {},
      workshops: {}
    },
    isSubmitting: false,
    submissionSucceeded: false
  },
  ui: {
    isAppInitialized: false,
    isNavBarOpen: false,
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
    case APP_INITIALIZED: {
      return { ...state, data: payload.experiences };
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

    case NAV_BAR_TOGGLED: {
      return { ...state, isNavBarOpen: !state.isNavBarOpen };
    }

    default: {
      return state;
    }
  }
};
