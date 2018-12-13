import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore
} from "redux";
import thunk from "redux-thunk";
import isNode from "detect-node";

import { classes, dances, events, ui } from "./reducers";

const createStore = (firebaseInstance, initialState) => {
  const rootReducer = combineReducers({
    classes,
    dances,
    events,
    ui
  });

  const getFirebase = () => firebaseInstance;

  const thunkMiddleware = thunk.withExtraArgument(getFirebase);
  const middleware = applyMiddleware(thunkMiddleware);

  let devToolsEnhancer;

  if (!isNode) {
    devToolsEnhancer =
      process.env.NODE_ENV !== "production" &&
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : undefined;
  }

  const enhancer = devToolsEnhancer
    ? compose(
        middleware,
        devToolsEnhancer
      )
    : middleware;

  return createReduxStore(rootReducer, initialState, enhancer);
};

export default createStore;
