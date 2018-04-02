import { createSelector } from "reselect";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;

export const selectExperienceSubmissionSucceeded = (state) => {
  return state.experiences.submissionSucceeded;
};

export const selectExperiences = (state) => state.experiences.data;
export const selectClasses = createSelector(
  selectExperiences,
  (experiences) => experiences.classes || {}
);

export const selectClassesByDay = createSelector(
  selectClasses,
  (classes) => {
    return Object.keys(classes).reduce((classesByDay, key) => {
      const recurrenceDay = classes[key].recurrenceDay;
      classesByDay[recurrenceDay] = (classesByDay[recurrenceDay] || [])
        .concat([classes[key]]);
      return classesByDay;
    }, {});
  }
);

export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectFilter = (state) => state.ui.filter;
export const selectSubfilter = (state) => state.ui.subfilter;
