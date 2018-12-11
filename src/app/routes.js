import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "./constants";
import Classes from "./pages/classes";
import Dances from "./pages/dances";
import Events from "./pages/events";

const routes = [
  {
    path: ROUTE_HOME,
    component: Classes,
    exact: true
  },
  {
    path: ROUTE_CLASSES,
    component: Classes
  },
  {
    path: ROUTE_DANCES,
    component: Dances
  },
  {
    path: ROUTE_EVENTS,
    component: Events
  }
];

export default routes;
