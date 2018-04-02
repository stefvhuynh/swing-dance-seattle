import { createSelector } from "reselect";

import { getExperiencesByDay } from "../utils";

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
export const selectDances = createSelector(
  selectExperiences,
  (experiences) => experiences.dances || {}
);
export const selectEvents = createSelector(
  selectExperiences,
  (experiences) => experiences.events || {}
);
export const selectWorkshops = createSelector(
  selectExperiences,
  (experiences) => experiences.workshops || {}
);

export const selectClassesByDay = createSelector(
  selectClasses,
  (classes) => getExperiencesByDay(classes)
);

export const selectDancesByDay = createSelector(
  selectDances,
  (dances) => getExperiencesByDay(dances)
);

export const selectEventsByDay = createSelector(
  selectEvents,
  (events) => getExperiencesByDay(events)
);

export const selectWorkshopsByDay = createSelector(
  selectWorkshops,
  (workshops) => getExperiencesByDay(workshops)
);

export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectFilter = (state) => state.ui.filter;
export const selectSubfilter = (state) => state.ui.subfilter;
