import { ONE_YEAR } from "./constants";
import { isRecurringCategory } from "./utils";

const API_CLASSES = "/classes";
const API_DANCES = "/dances";
const API_EVENTS = "/events";

export const serializeExperience = ({
  category,
  dateEnd,
  dateStart,
  link,
  name,
  neighborhood,
  organization,
  recurrenceDay,
  recurrenceTime,
  time,
  venue
}) => {
  const commonDetails = {
    approved: false,
    name,
    link,
    neighborhood,
    organization,
    time,
    venue
  };

  return isRecurringCategory(category) ? {
    ...commonDetails,
    recurrenceDay,
    recurrenceTime
  } : {
    ...commonDetails,
    dateEnd: (new Date(`${dateEnd} PDT`)).toISOString(),
    dateStart: (new Date(`${dateStart} PDT`)).toISOString()
  };
};

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

export const getNonrecurringExperiences = (apiEndpoint, firebase) => {
  const now = (new Date()).toISOString();
  const oneYearLater = (new Date(Date.now() + ONE_YEAR)).toISOString();

  return firebase.database()
    .ref(apiEndpoint)
    .orderByChild("dateEnd")
    .startAt(now)
    .endAt(oneYearLater)
    .once("value")
    .then((snapshot) => {
      const value = snapshot.val();
      return value ? value : {};
    });
};

export const getClasses = getRecurringExperiences.bind(null, API_CLASSES);
export const getDances = getRecurringExperiences.bind(null, API_DANCES);
export const getEvents = getNonrecurringExperiences.bind(null, API_EVENTS);

export const postExperience = (
  apiEndpoint,
  firebase,
  experience
) => {
  const ref = firebase.database().ref(apiEndpoint).push();
  return ref.set({ id: ref.key, approved: false, ...experience });
};

export const postClass = postExperience.bind(null, API_CLASSES);
export const postDance = postExperience.bind(null, API_DANCES);
export const postEvent = postExperience.bind(null, API_EVENTS);
