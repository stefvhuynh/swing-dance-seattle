import {
  API_PATH_CLASSES,
  API_PATH_DANCES,
  API_PATH_EVENTS,
  ONE_YEAR
} from "./constants";

export const fetchRecurringExperiences = (firebase, apiPath) => {
  return firebase
    .database()
    .ref(apiPath)
    .once("value")
    .then(snapshot => {
      const value = snapshot.val();
      return value ? value : {};
    });
};

export const fetchNonrecurringExperiences = (firebase, apiPath) => {
  const now = new Date().toISOString();
  const oneYearLater = new Date(Date.now() + ONE_YEAR).toISOString();

  return firebase
    .database()
    .ref(apiPath)
    .orderByChild("dateEnd")
    .startAt(now)
    .endAt(oneYearLater)
    .once("value")
    .then(snapshot => {
      const value = snapshot.val();
      return value ? value : {};
    });
};

export const fetchClasses = firebase =>
  fetchRecurringExperiences(firebase, API_PATH_CLASSES);
export const fetchDances = firebase =>
  fetchRecurringExperiences(firebase, API_PATH_DANCES);
export const fetchEvents = firebase =>
  fetchNonrecurringExperiences(firebase, API_PATH_EVENTS);
