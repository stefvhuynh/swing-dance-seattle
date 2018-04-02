export const MOBILE_BREAKPOINT = 768;
export const WINDOW_RESIZE_DEBOUNCE_TIME = 200;
export const TWO_WEEKS = 12096e5;

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
  [RECURRENCE_TIME_EVERY]: "Every",
  [RECURRENCE_TIME_FIRST]: "Every first",
  [RECURRENCE_TIME_SECOND]: "Every second",
  [RECURRENCE_TIME_THIRD]: "Every third",
  [RECURRENCE_TIME_FOURTH]: "Every fourth"
};

export const RECURRENCE_DAY_SUNDAY = "1";
export const RECURRENCE_DAY_MONDAY = "2";
export const RECURRENCE_DAY_TUESDAY = "3";
export const RECURRENCE_DAY_WEDNESDAY = "4";
export const RECURRENCE_DAY_THURSDAY = "5";
export const RECURRENCE_DAY_FRIDAY = "6";
export const RECURRENCE_DAY_SATURDAY = "7";

export const RECURRENCE_DAY_MAP = {
  [EMPTY_TYPE]: "",
  [RECURRENCE_DAY_SUNDAY]: "Sunday",
  [RECURRENCE_DAY_MONDAY]: "Monday",
  [RECURRENCE_DAY_TUESDAY]: "Tuesday",
  [RECURRENCE_DAY_WEDNESDAY]: "Wednesday",
  [RECURRENCE_DAY_THURSDAY]: "Thursday",
  [RECURRENCE_DAY_FRIDAY]: "Friday",
  [RECURRENCE_DAY_SATURDAY]: "Saturday"
};

export const FILTER_LEARN = "1";
export const FILTER_DANCE = "2";

export const FILTER_MAP = {
  [FILTER_LEARN]: "Learn",
  [FILTER_DANCE]: "Dance"
};

export const SUBFILTER_DEFAULT = "1";

export const SUBFILTER_LEARN_CLASSES = "1";
export const SUBFILTER_LEARN_WORKSHOPS = "2";

export const SUBFILTER_LEARN_MAP = {
  [SUBFILTER_LEARN_CLASSES]: "Classes",
  [SUBFILTER_LEARN_WORKSHOPS]: "Workshops"
};

export const SUBFILTER_DANCE_WEEKLY = "1";
export const SUBFILTER_DANCE_MONTHLY = "2";
export const SUBFILTER_DANCE_EVENTS = "3";

export const SUBFILTER_DANCE_MAP = {
  [SUBFILTER_DANCE_WEEKLY]: "Weekly",
  [SUBFILTER_DANCE_MONTHLY]: "Monthly",
  [SUBFILTER_DANCE_EVENTS]: "Events"
};

export const SUBFILTER_MAP = {
  [FILTER_LEARN]: SUBFILTER_LEARN_MAP,
  [FILTER_DANCE]: SUBFILTER_DANCE_MAP
};
