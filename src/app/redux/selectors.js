import { createSelector } from "reselect";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_HOME,
  ROUTE_EVENTS
} from "../routes";

import { MOBILE_BREAKPOINT } from "../constants";
import { getExperiencesByDay } from "../utils";

export const selectRoute = (state) => state.router.route;

export const selectIsRecurringExperience = createSelector(
  selectRoute,
  (route) => {
    return route === ROUTE_HOME
      || route === ROUTE_CLASSES
      || route === ROUTE_DANCES;
  }
);

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;
export const selectExperiences = (state) => state.experiences.data;
export const selectIsFetchingExperiences = (state) => {
  return state.experiences.isFetching;
};
export const selectExperienceSubmissionSucceeded = (state) => {
  return state.experiences.submissionSucceeded;
};

export const selectIsAppInitialized = (state) => state.ui.isAppInitialized;
export const selectIsMobile = (state) => {
  return state.ui.windowWidth < MOBILE_BREAKPOINT;
};

export const selectExperiencesByDay = createSelector(
  selectRoute,
  selectExperiences,
  (route, experiences) => {
    switch (route) {
      case ROUTE_HOME:
      case ROUTE_CLASSES: {
        return getExperiencesByDay(experiences.classes);
      }
      case ROUTE_DANCES: {
        return getExperiencesByDay(experiences.dances);
      }
      case ROUTE_EVENTS: {
        return getExperiencesByDay(experiences.events);
      }
      default: {
        return {};
      }
    }
  }
);
