import { createSelector } from "reselect";

import { DESKTOP_BREAKPOINT } from "../constants";
import { getOccasionsByDate, getOccasionsByDay } from "../utils";

const createDataNeedsFetchingSelector = (fetchedSelector, fetchingSelector) =>
  createSelector(
    fetchedSelector,
    fetchingSelector,
    (fetched, fetching) => !fetched && !fetching
  );

export const selectClassesState = state => state.classes;
export const selectClasses = state => selectClassesState(state).data;
export const selectClassesByDay = createSelector(
  selectClasses,
  getOccasionsByDay
);
export const selectClassesFetched = state => selectClassesState(state).fetched;
export const selectClassesFetching = state =>
  selectClassesState(state).fetching;
export const selectClassesNeedFetching = createDataNeedsFetchingSelector(
  selectClassesFetched,
  selectClassesFetching
);

export const selectDancesState = state => state.dances;
export const selectDances = state => selectDancesState(state).data;
export const selectDancesByDay = createSelector(
  selectDances,
  getOccasionsByDay
);
export const selectDancesFetched = state => selectDancesState(state).fetched;
export const selectDancesFetching = state => selectDancesState(state).fetching;
export const selectDancesNeedFetching = createDataNeedsFetchingSelector(
  selectDancesFetched,
  selectDancesFetching
);

export const selectEventsState = state => state.events;
export const selectEvents = state => selectEventsState(state).data;
export const selectEventsByDate = createSelector(
  selectEvents,
  getOccasionsByDate
);
export const selectEventsFetched = state => selectEventsState(state).fetched;
export const selectEventsFetching = state => selectEventsState(state).fetching;
export const selectEventsNeedFetching = createDataNeedsFetchingSelector(
  selectEventsFetched,
  selectEventsFetching
);

export const selectUiState = state => state.ui;
export const selectWindowWidth = state => selectUiState(state).windowWidth;
export const selectIsDesktop = createSelector(
  selectWindowWidth,
  windowWidth => windowWidth > DESKTOP_BREAKPOINT
);
