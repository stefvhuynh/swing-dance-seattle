import {
  DAY_MAP,
  LINK_PREFIX,
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
  return includeDay
    ? `${DAY_MAP[dateInstance.getDay()]}, ${display}`
    : display;
};

export const isValidTime = (time) => {
  const timeRegex = /^[0-1]?[0-9]:[0-5][0-9][ap]m$/;
  return timeRegex.test(time);
};

export const getValidLink = (link) => {
  return link.startsWith(LINK_PREFIX) ? link : `${LINK_PREFIX}://${link}`;
};

/* eslint-disable no-magic-numbers */
const sortExperiencesByTime = (experiences) => {
  return experiences.sort((a, b) => {
    if (!a.time) {
      return 1;
    } else if (!b.time) {
      return -1;
    }

    const aPeriod = a.time.replace(/\s/g, "").substr(-1, 2).toLowerCase();
    const bPeriod = b.time.replace(/\s/g, "").substr(-1, 2).toLowerCase();

    if (aPeriod === "am" && bPeriod === "pm") {
      return -1;
    } else if (aPeriod === "pm" && bPeriod === "am") {
      return 1;
    }

    if (a.time < b.time) {
      return -1;
    } else if (b.time < a.time) {
      return 1;
    }

    return 0;
  });
};
/* eslint-enable no-magic-numbers */

export const getExperiencesByDay = (experiencesByKey) => {
  const experiencesByDay = Object.keys(experiencesByKey).reduce((
    dayMap,
    key
  ) => {
    const experience = experiencesByKey[key];
    const day = experience.dateStart
      ? experience.dateStart
      : experience.recurrenceDay;

    dayMap[day] = (dayMap[day] || []).concat([experience]);

    return dayMap;
  }, {});

  Object.keys(experiencesByDay).forEach((key) => {
    experiencesByDay[key] = sortExperiencesByTime(experiencesByDay[key]);
  });

  return experiencesByDay;
};
