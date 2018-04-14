export const ROUTE_HOME = "/";
export const ROUTE_CLASSES = "/classes";
export const ROUTE_WORKSHOPS = "/workshops";
export const ROUTE_DANCES = "/dances";
export const ROUTE_EVENTS = "/events";
export const ROUTE_ADMIN = "/admin";

export default {
  [ROUTE_HOME]: {
    title: "Home",

    [ROUTE_CLASSES]: {
      title: "Classes",
      isRecurring: true
    },
    [ROUTE_WORKSHOPS]: {
      title: "Workshops",
      isRecurring: false
    },
    [ROUTE_DANCES]: {
      title: "Dances",
      isRecurring: true
    },
    [ROUTE_EVENTS]: {
      title: "Events",
      isRecurring: false
    }
  },
  [ROUTE_ADMIN]: {
    title: "Admin"
  }
};
