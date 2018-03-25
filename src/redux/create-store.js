import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerForBrowser } from "redux-little-router";

import { events, ui, users } from "./reducer";
import routes from "../routes";

export default () => {
  const {
    reducer: router,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = routerForBrowser({ routes });

  const devtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

  const middleware = applyMiddleware(routerMiddleware);

  const enhancer = compose(
    devtoolsEnhancer,
    routerEnhancer,
    middleware
  );

  const rootReducer = combineReducers({
    events,
    router,
    ui,
    users
  });

  return createStore(rootReducer, enhancer);
};
