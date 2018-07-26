import {
  ROUTE_ADMIN,
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "./constants";

export default {
  [ROUTE_HOME]: {
    title: "Home",

    [ROUTE_CLASSES]: {
      title: "Classes"
    },
    [ROUTE_DANCES]: {
      title: "Dances"
    },
    [ROUTE_EVENTS]: {
      title: "Events"
    }
  },
  [ROUTE_ADMIN]: {
    title: "Admin"
  }
};
