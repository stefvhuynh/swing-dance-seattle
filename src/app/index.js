import React, { Fragment, useContext, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import debounce from "debounce";
import isNode from "detect-node";

import {
  ROUTE_CLASSES,
  ROUTE_DANCES,
  ROUTE_EVENTS,
  ROUTE_HOME,
  WINDOW_RESIZE_DEBOUNCE_TIME
} from "./constants";
import Providers from "./providers";
import { ScreenWidthContext } from "./providers/screen-width";
import Header from "./components/header";
import NavBar from "./components/nav-bar";
import Classes from "./pages/classes";
import Dances from "./pages/dances";
import Events from "./pages/events";

const App = () => {
  const { setScreenWidth } = useContext(ScreenWidthContext);

  const handleWindowResize = debounce(
    (event) => setScreenWidth(event.currentTarget.innerWidth),
    WINDOW_RESIZE_DEBOUNCE_TIME
  );

  if (!isNode) {
    useLayoutEffect(() => {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => {
        handleWindowResize.clear();
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  }

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

export default () => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};
