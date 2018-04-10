import { createSelector } from "reselect";

import {
  SUBFILTER_CLASSES,
  SUBFILTER_DANCES,
  SUBFILTER_EVENTS,
  SUBFILTER_WORKSHOPS
} from "../constants";

import { getExperiencesByDay } from "../utils";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;

export const selectExperienceSubmissionSucceeded = (state) => {
  return state.experiences.submissionSucceeded;
};

export const selectExperiences = (state) => state.experiences.data;

export const selectIsAppInitialized = (state) => state.ui.isAppInitialized;
export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectFilter = (state) => state.ui.filter;
export const selectSubfilter = (state) => state.ui.subfilter;

export const selectIsRecurring = createSelector(
  selectSubfilter,
  (subfilter) => {
    return subfilter === SUBFILTER_CLASSES || subfilter === SUBFILTER_DANCES;
  }
);

export const selectExperiencesByDay = createSelector(
  selectSubfilter,
  selectExperiences,
  (subfilter, experiences) => {
    switch (subfilter) {
      case SUBFILTER_CLASSES: {
        return getExperiencesByDay(experiences.classes);
      }
      case SUBFILTER_DANCES: {
        return getExperiencesByDay(experiences.dances);
      }
      case SUBFILTER_EVENTS: {
        return getExperiencesByDay(experiences.events);
      }
      case SUBFILTER_WORKSHOPS: {
        return getExperiencesByDay(experiences.workshops);
      }
      default: {
        return {};
      }
    }
  }
);
