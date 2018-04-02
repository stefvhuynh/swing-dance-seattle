import { createSelector } from "reselect";

import { CATEGORY_CLASS } from "../constants";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;

export const selectExperienceSubmissionSucceeded = (state) => {
  return state.experiences.submissionSucceeded;
};

export const selectExperiences = (state) => state.experiences.data;

export const selectClasses = createSelector(
  selectExperiences,
  (experiences) => {
    return Object.keys(experiences)
      .filter((key) => experiences[key].category === CATEGORY_CLASS)
      .map((key) => experiences[key]);
  }
);

export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectFilter = (state) => state.ui.filter;
export const selectSubfilter = (state) => state.ui.subfilter;
