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
import Classes from "./pages/classes";
import Dances from "./pages/dances";
import Events from "./pages/events";
import Header from "./components/header";
import NavBar from "./components/nav-bar";

library.add(faAngleDown, faAngleRight);

const App = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />

      <Switch>
        <Route path={ROUTE_HOME} exact component={Classes} />
        <Route path={ROUTE_CLASSES} component={Classes} />
        <Route path={ROUTE_DANCES} component={Dances} />
        <Route path={ROUTE_EVENTS} component={Events} />
      </Switch>
    </Fragment>
  );
};

export default App;
