export const MOBILE_BREAKPOINT = 768;
export const WINDOW_RESIZE_DEBOUNCE_TIME = 200;
export const ONE_YEAR = 3154e10;
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

export const EMPTY_TYPE = "0";

export const CATEGORY_CLASS = "1";
export const CATEGORY_DANCE = "2";
export const CATEGORY_EVENT = "3";
export const CATEGORY_WORKSHOP = "4";

export const CATEGORY_MAP = {
  [EMPTY_TYPE]: "",
  [CATEGORY_CLASS]: "Class",
  [CATEGORY_DANCE]: "Dance",
  [CATEGORY_EVENT]: "Event",
  [CATEGORY_WORKSHOP]: "Workshop"
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

export const RECURRENCE_DAY_MONDAY = "1";
export const RECURRENCE_DAY_TUESDAY = "2";
export const RECURRENCE_DAY_WEDNESDAY = "3";
export const RECURRENCE_DAY_THURSDAY = "4";
export const RECURRENCE_DAY_FRIDAY = "5";
export const RECURRENCE_DAY_SATURDAY = "6";
export const RECURRENCE_DAY_SUNDAY = "7";

export const RECURRENCE_DAY_MAP = {
  [EMPTY_TYPE]: "",
  [RECURRENCE_DAY_MONDAY]: "Mondays",
  [RECURRENCE_DAY_TUESDAY]: "Tuesdays",
  [RECURRENCE_DAY_WEDNESDAY]: "Wednesdays",
  [RECURRENCE_DAY_THURSDAY]: "Thursdays",
  [RECURRENCE_DAY_FRIDAY]: "Fridays",
  [RECURRENCE_DAY_SATURDAY]: "Saturdays",
  [RECURRENCE_DAY_SUNDAY]: "Sundays"
};

export const FILTER_LEARN = "1";
export const FILTER_DANCE = "2";

export const FILTER_MAP = {
  [FILTER_LEARN]: "Learn!",
  [FILTER_DANCE]: "Dance!"
};

export const SUBFILTER_CLASSES = "1";
export const SUBFILTER_WORKSHOPS = "2";
export const SUBFILTER_DANCES = "3";
export const SUBFILTER_EVENTS = "4";

export const SUBFILTER_MAP = {
  [SUBFILTER_CLASSES]: "Classes",
  [SUBFILTER_WORKSHOPS]: "Workshops",
  [SUBFILTER_DANCES]: "Dances",
  [SUBFILTER_EVENTS]: "Events"
};

export const FILTER_SUBFILTER_MAP = {
  [FILTER_LEARN]: [SUBFILTER_CLASSES, SUBFILTER_WORKSHOPS],
  [FILTER_DANCE]: [SUBFILTER_DANCES, SUBFILTER_EVENTS]
};
