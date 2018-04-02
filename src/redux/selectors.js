import { createSelector } from "reselect";

import { CATEGORY_CLASS } from "../constants";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.loginErrorMessage;

export const selectEventSubmissionSucceeded = (state) => {
  return state.events.submissionSucceeded;
};

export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsNavBarOpen = (state) => state.ui.isNavBarOpen;
export const selectFilter = (state) => state.ui.filter;
export const selectSubfilter = (state) => state.ui.subfilter;

export const selectEvents = (state) => state.events.data;

export const selectClasses = createSelector(selectEvents, (events) => {
  return Object.keys(events).map((key) => {
    const event = events[key];
    if (event.category === CATEGORY_CLASS) {
      return event;
    }
  }).filter((event) => event !== undefined);
});
