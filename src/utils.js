import { CATEGORY_CLASS, CATEGORY_DANCE } from "./constants";

export const convertMapToList = (map, keyName = "key", valueName = "value") => {
  return Object.keys(map).map((key) => ({
    [keyName]: key,
    [valueName]: map[key]
  }));
};

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

export const getExperiencesByDay = (experiences) => {
  return Object.keys(experiences).reduce((experiencesByDay, key) => {
    const experience = experiences[key];
    const day = experience.dateStart
      ? experience.dateStart
      : experience.recurrenceDay;

    experiencesByDay[day] = (experiencesByDay[day] || [])
      .concat([experience]);

    return experiencesByDay;
  }, {});
};
