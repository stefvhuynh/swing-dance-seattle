import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerForBrowser } from "redux-little-router";
import thunkMiddleware from "redux-thunk";

import { auth, events, ui } from "./reducer";
import routes from "../routes";

export default () => {
  const {
    reducer: router,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = routerForBrowser({ routes });

  const middleware = applyMiddleware(routerMiddleware, thunkMiddleware);

  const devtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

  const enhancer = compose(
    middleware,
    routerEnhancer,
    devtoolsEnhancer
  );

  const rootReducer = combineReducers({
    auth,
    events,
    router,
    ui
  });

  return createStore(rootReducer, enhancer);
};
