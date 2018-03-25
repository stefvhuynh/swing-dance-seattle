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

  const enhancer = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    routerEnhancer,
    middleware
  );

  return createStore(rootReducer, enhancer);
};
