import {
  CATEGORY_CLASS,
  CATEGORY_DANCE,
  DAY_MAP,
  MONTH_MAP
} from "./constants";

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

/* eslint-disable no-magic-numbers */
const getNumericDateSuffix = (numericDate) => {
  if (numericDate > 10 && numericDate < 14) {
    return "th";
  }

  switch (numericDate % 10) {
    case 1: {
      return "st";
    }
    case 2: {
      return "nd";
    }
    case 3: {
      return "rd";
    }
    default: {
      return "th";
    }
  }
};
/* eslint-enable no-magic-numbers */

export const getDateDisplay = (
  date,
  { includeDay = false, includeSuffix = false } = {}
) => {
  const dateInstance = new Date(date);
  const numericDate = dateInstance.getDate();
  const dateSuffix = includeSuffix ? getNumericDateSuffix(numericDate) : "";
  const display =
    `${MONTH_MAP[dateInstance.getMonth()]} ${numericDate}${dateSuffix}`;
  return includeDay ? `${DAY_MAP[dateInstance.getDay()]}, ${display}` : display;
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
