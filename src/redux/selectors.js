import { createSelector } from "reselect";

import { CATEGORY_CLASS } from "../constants";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;

export const selectEventSubmissionSucceeded = (state) => {
  return state.events.submissionSucceeded;
};

export const selectEvents = (state) => state.events.data;

export const selectClasses = createSelector(selectEvents, (events) => {
  return Object.keys(events)
    .filter((key) => events[key].category === CATEGORY_CLASS)
    .map((key) => events[key]);
});

export const selectClassesByDay = createSelector(
  selectClasses,
  (classes) => {
    return classes.reduce((classesByDay, classEvent) => {
      const classesOnDay = classesByDay[classEvent.recurrenceDay];
      if (classesOnDay) {
        classesOnDay.push(classEvent);
      } else {
        classesByDay[classEvent.recurrenceDay] = [classEvent];
      }
      return classesByDay;
    }, {});
  }
);

export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectFilter = (state) => state.ui.filter;
export const selectSubfilter = (state) => state.ui.subfilter;
