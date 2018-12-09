import firebase from "firebase";
import firebaseConfig from "../../firebase.config";

import {
  API_PATH_CLASSES,
  API_PATH_DANCES,
  API_PATH_EVENTS,
  ONE_YEAR
} from "./constants";

const firebaseInstance = firebase.initializeApp(
  firebaseConfig.config,
  firebaseConfig.key
);

export const fetchRecurringExperiences = (apiPath) => {
  return firebaseInstance.database()
    .ref(apiPath)
    .once("value")
    .then((snapshot) => {
      const value = snapshot.val();
      return value ? value : {};
    });
};

export const fetchNonrecurringExperiences = (apiPath) => {
  const now = (new Date()).toISOString();
  const oneYearLater = (new Date(Date.now() + ONE_YEAR)).toISOString();

  return firebaseInstance.database()
    .ref(apiPath)
    .orderByChild("dateEnd")
    .startAt(now)
    .endAt(oneYearLater)
    .once("value")
    .then((snapshot) => {
      const value = snapshot.val();
      return value ? value : {};
    });
};

export const fetchClasses = () => fetchRecurringExperiences(API_PATH_CLASSES);
export const fetchDances = () => fetchRecurringExperiences(API_PATH_DANCES);
export const fetchEvents = () => fetchNonrecurringExperiences(API_PATH_EVENTS);
