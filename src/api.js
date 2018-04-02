import { ONE_YEAR } from "./constants";
import { isRecurringCategory } from "./utils";

const API_CLASSES = "/classes";
const API_DANCES = "/dances";
const API_EVENTS = "/events";
const API_WORKSHOPS = "/workshops";

export const serializeExperience = ({
  category,
  dateEnd,
  dateStart,
  link,
  name,
  neighborhood,
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
    time,
    venue
  };

  return isRecurringCategory(category) ? {
    ...commonDetails,
    recurrenceDay,
    recurrenceTime
  } : {
    ...commonDetails,
    dateEnd: (new Date(dateEnd)).toISOString(),
    dateStart: (new Date(dateStart)).toISOString()
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
    .then((snapshot) => snapshot.val());
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
    .then((snapshot) => snapshot.val());
};

export const getClasses = getRecurringExperiences.bind(null, API_CLASSES);
export const getDances = getRecurringExperiences.bind(null, API_DANCES);
export const getEvents = getNonrecurringExperiences.bind(null, API_EVENTS);
export const getWorkshops = getNonrecurringExperiences.bind(
  null,
  API_WORKSHOPS
);

export const getExperiences = (firebase) => {
  return Promise.all([
    getClasses(firebase),
    getDances(firebase),
    getEvents(firebase),
    getWorkshops(firebase)
  ]).then((values) => {
    const [classes, dances, events, workshops] = values;
    return { classes, dances, events, workshops };
  });
};

export const postExperience = (
  apiEndpoint,
  firebase,
  experience
) => {
  const ref = firebase.database().ref(apiEndpoint).push();
  return ref.set({ id: ref.key, ...experience });
};

export const postClass = postExperience.bind(null, API_CLASSES);
export const postDance = postExperience.bind(null, API_DANCES);
export const postEvent = postExperience.bind(null, API_EVENTS);
export const postWorkshop = postExperience.bind(null, API_WORKSHOPS);
