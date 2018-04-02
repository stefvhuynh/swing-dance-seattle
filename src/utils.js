import { CATEGORY_CLASS, CATEGORY_DANCE, TWO_WEEKS } from "./constants";

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

export const getRecurringEvents = (firebase) => {
  return firebase.database()
    .ref("/recurring-events")
    .once("value")
    .then((snapshot) => snapshot.val());
};

export const getNonrecurringEvents = (firebase) => {
  const now = (new Date()).toISOString();
  const twoWeeksLater = (new Date(Date.now() + TWO_WEEKS)).toISOString();

  return firebase.database()
    .ref("/nonrecurring-events")
    .orderByChild("dateStart")
    .startAt(now)
    .endAt(twoWeeksLater)
    .once("value")
    .then((snapshot) => snapshot.val());
};

export const getEvents = (firebase) => {
  return Promise.all([
    getRecurringEvents(firebase),
    getNonrecurringEvents(firebase)
  ]).then((values) => {
    const [recurringEvents, nonrecurringEvents] = values;
    return { ...recurringEvents, ...nonrecurringEvents };
  });
};

export const postRecurringEvent = (firebase, eventDetails) => {
  return firebase.database().ref("/recurring-events").push().set(eventDetails);
};

export const postNonrecurringEvent = (firebase, eventDetails) => {
  return firebase.database()
    .ref("/nonrecurring-events")
    .push()
    .set(eventDetails);
};

export const convertMapToList = (map, keyName = "key", valueName = "value") => {
  return Object.keys(map).map((key) => ({
    [keyName]: key,
    [valueName]: map[key]
  }));
};

export const getValueDisplayList = (map) => {
  return convertMapToList(map, "value", "display");
};

export const getDateString = (date) => (new Date(date)).toISOString();

export const isValidDate = (date) => {
  const dateObj = new Date(date);
  return dateObj !== "Invalid Date" && dateObj > Date.now();
};

export const isDateStartBeforeDateEnd = (dateStart, dateEnd) => {
  return new Date(dateStart) <= new Date(dateEnd);
};

export const isValidTime = (time) => {
  const timeRegex = /^[0-1]?[0-9]:[0-5][0-9][ap]m$/;
  return timeRegex.test(time);
};

export const isRecurringCategory = (category) => {
  return category === CATEGORY_CLASS || category === CATEGORY_DANCE;
};

export const serializeEvent = ({
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
    category,
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
    dateEnd: getDateString(dateEnd),
    dateStart: getDateString(dateStart)
  };
};
