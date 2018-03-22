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

  const rootReducer = combineReducers({
    events,
    router,
    ui,
    users
  });

  const middleware = applyMiddleware(routerMiddleware);

  return createStore(
    rootReducer,
    compose(routerEnhancer, middleware)
  );
};
