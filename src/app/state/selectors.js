import { createSelector } from "reselect";

export const selectClassesState = state => state.classes;
export const selectClassesFetched = state => selectClassesState(state).fetched;
export const selectClassesFetching = state =>
  selectClassesState(state).fetching;
export const selectClassesNeedFetching = createSelector(
  selectClassesFetched,
  selectClassesFetching,
  (fetched, fetching) => !fetched && !fetching
);

export const selectDancesState = state => state.dances;
export const selectDancesFetched = state => selectDancesState(state).fetched;
export const selectDancesFetching = state => selectDancesState(state).fetching;
export const selectDancesNeedFetching = createSelector(
  selectDancesFetched,
  selectDancesFetching,
  (fetched, fetching) => !fetched && !fetching
);

export const selectEventsState = state => state.events;
export const selectEventsFetched = state => selectEventsState(state).fetched;
export const selectEventsFetching = state => selectEventsState(state).fetching;
export const selectEventsNeedFetching = createSelector(
  selectEventsFetched,
  selectEventsFetching,
  (fetched, fetching) => !fetched && !fetching
);
