export const MOBILE_BREAKPOINT = 768;
export const WINDOW_RESIZE_DEBOUNCE_TIME = 200;

const generateValueDisplayList = (map) => Object.keys(map).map((key) => ({
  value: key,
  display: map[key]
}));

export const CATEGORY_DANCE = 1;
export const CATEGORY_CLASS = 2;
export const CATEGORY_EVENT = 3;
export const CATEGORY_WORKSHOP = 4;

export const CATEGORY_MAP = {
  [CATEGORY_DANCE]: "Dance",
  [CATEGORY_CLASS]: "Class",
  [CATEGORY_EVENT]: "Event",
  [CATEGORY_WORKSHOP]: "Workshop"
};

export const CATEGORY_LIST = generateValueDisplayList(CATEGORY_MAP);

export const RECURRENCE_TIME_FIRST = 1;
export const RECURRENCE_TIME_SECOND = 2;
export const RECURRENCE_TIME_THIRD = 3;
export const RECURRENCE_TIME_FOURTH = 4;

export const RECURRENCE_TIME_MAP = {
  [RECURRENCE_TIME_FIRST]: "Every first",
  [RECURRENCE_TIME_SECOND]: "Every second",
  [RECURRENCE_TIME_THIRD]: "Every third",
  [RECURRENCE_TIME_FOURTH]: "Every fourth"
};

export const RECURRENCE_TIME_LIST = generateValueDisplayList(
  RECURRENCE_TIME_MAP
);

export const RECURRENCE_DAY_SUNDAY = 1;
export const RECURRENCE_DAY_MONDAY = 2;
export const RECURRENCE_DAY_TUESDAY = 3;
export const RECURRENCE_DAY_WEDNESDAY = 4;
export const RECURRENCE_DAY_THURSDAY = 5;
export const RECURRENCE_DAY_FRIDAY = 6;
export const RECURRENCE_DAY_SATURDAY = 7;

export const RECURRENCE_DAY_MAP = {
  [RECURRENCE_DAY_SUNDAY]: "Sunday",
  [RECURRENCE_DAY_MONDAY]: "Monday",
  [RECURRENCE_DAY_TUESDAY]: "Tuesday",
  [RECURRENCE_DAY_WEDNESDAY]: "Wednesday",
  [RECURRENCE_DAY_THURSDAY]: "Thursday",
  [RECURRENCE_DAY_FRIDAY]: "Friday",
  [RECURRENCE_DAY_SATURDAY]: "Saturday"
};

export const RECURRENCE_DAY_LIST = generateValueDisplayList(
  RECURRENCE_DAY_MAP
);
