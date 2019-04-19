import { createSelector } from "reselect";

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

export const selectEventsSortedByDate = createSelector(
  selectEvents,
  events => {
    const eventsByDate = getOccasionsByDate(events);
    const sortedDates = Object.keys(eventsByDate)
      .slice()
      .sort();
    return sortedDates.map(date => eventsByDate[date]);
  }
);

export const selectEventsFetched = state => selectEventsState(state).fetched;
export const selectEventsFetching = state => selectEventsState(state).fetching;
export const selectEventsNeedFetching = createDataNeedsFetchingSelector(
  selectEventsFetched,
  selectEventsFetching
);
