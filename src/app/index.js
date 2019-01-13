import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME
} from "./constants";
import ClassesPage from "./pages/classes-page";
import DancesPage from "./pages/dances-page";
import EventsPage from "./pages/events-page";
import Header from "./components/header";
import NavBar from "./components/nav-bar";

library.add(faAngleDown, faAngleRight);

const App = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />

      <Switch>
        <Route path={ROUTE_HOME} exact component={ClassesPage} />
        <Route path={ROUTE_CLASSES} component={ClassesPage} />
        <Route path={ROUTE_DANCES} component={DancesPage} />
        <Route path={ROUTE_EVENTS} component={EventsPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
