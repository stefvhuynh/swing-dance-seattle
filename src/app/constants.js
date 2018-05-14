export const MOBILE_BREAKPOINT = 768;
export const WINDOW_RESIZE_DEBOUNCE_TIME = 200;
export const ONE_HOUR = 3.6e6;
export const ONE_YEAR = 3.154e10;
export const LINK_PREFIX = "http";

export const DATE_MONTH_MAP = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export const DATE_DAY_MAP = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const EMPTY_TYPE = "-1";

export const CATEGORY_CLASS = "1";
export const CATEGORY_DANCE = "2";
export const CATEGORY_EVENT = "3";

export const CATEGORY_MAP = {
  [EMPTY_TYPE]: "",
  [CATEGORY_CLASS]: "Class",
  [CATEGORY_DANCE]: "Dance",
  [CATEGORY_EVENT]: "Event"
};

export const RECURRENCE_TIME_FIRST = "1";
export const RECURRENCE_TIME_SECOND = "2";
export const RECURRENCE_TIME_THIRD = "3";
export const RECURRENCE_TIME_FOURTH = "4";
export const RECURRENCE_TIME_EVERY = "5";

export const RECURRENCE_TIME_MAP = {
  [EMPTY_TYPE]: "",
  [RECURRENCE_TIME_EVERY]: "Weekly",
  [RECURRENCE_TIME_FIRST]: "First",
  [RECURRENCE_TIME_SECOND]: "Second",
  [RECURRENCE_TIME_THIRD]: "Third",
  [RECURRENCE_TIME_FOURTH]: "Fourth"
};

export const RECURRENCE_DAY_SUNDAY = "0";
export const RECURRENCE_DAY_MONDAY = "1";
export const RECURRENCE_DAY_TUESDAY = "2";
export const RECURRENCE_DAY_WEDNESDAY = "3";
export const RECURRENCE_DAY_THURSDAY = "4";
export const RECURRENCE_DAY_FRIDAY = "5";
export const RECURRENCE_DAY_SATURDAY = "6";

export const RECURRENCE_DAY_MAP = {
  [EMPTY_TYPE]: "",
  [RECURRENCE_DAY_SUNDAY]: "Sundays",
  [RECURRENCE_DAY_MONDAY]: "Mondays",
  [RECURRENCE_DAY_TUESDAY]: "Tuesdays",
  [RECURRENCE_DAY_WEDNESDAY]: "Wednesdays",
  [RECURRENCE_DAY_THURSDAY]: "Thursdays",
  [RECURRENCE_DAY_FRIDAY]: "Fridays",
  [RECURRENCE_DAY_SATURDAY]: "Saturdays"
};

export const DANCE_STYLE_LINDY = "1";
export const DANCE_STYLE_BALBOA = "2";
export const DANCE_STYLE_BLUES = "3";
export const DANCE_STYLE_SHAG = "4";
export const DANCE_STYLE_JAZZ = "5";

export const DANCE_STYLE_MAP = {
  [DANCE_STYLE_LINDY]: "Lindy Hop",
  [DANCE_STYLE_BALBOA]: "Balboa",
  [DANCE_STYLE_BLUES]: "Blues",
  [DANCE_STYLE_SHAG]: "Shag",
  [DANCE_STYLE_JAZZ]: "Solo Jazz"
};
