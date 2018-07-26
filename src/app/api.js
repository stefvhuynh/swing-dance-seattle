import {
  API_PATH_CLASSES,
  API_PATH_DANCES,
  API_PATH_EVENTS,
  ONE_YEAR
} from "./constants";

export const logIn = (firebase, username, password) => {
  return firebase.auth().signInWithEmailAndPassword(username, password);
};

export const logOut = (firebase) => {
  return firebase.auth().signOut();
};

export const getAuthorizedUser = (firebase) => {
  return new Promise((resolve) => {
    const removeListener = firebase.auth().onAuthStateChanged((user) => {
      resolve(user);
      removeListener();
    });
  });
};

export const getRecurringExperiences = (apiEndpoint, firebase) => {
  return firebase.database()
    .ref(apiEndpoint)
    .once("value")
    .then((snapshot) => {
      const value = snapshot.val();
      return value ? value : {};
    });
};

export const getNonrecurringExperiences = (apiPath, firebase) => {
  const now = (new Date()).toISOString();
  const oneYearLater = (new Date(Date.now() + ONE_YEAR)).toISOString();

  return firebase.database()
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

export const getClasses = getRecurringExperiences.bind(null, API_PATH_CLASSES);
export const getDances = getRecurringExperiences.bind(null, API_PATH_DANCES);
export const getEvents = getNonrecurringExperiences.bind(null, API_PATH_EVENTS);
