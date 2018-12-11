import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore
} from "redux";
import thunk from "redux-thunk";
import firebase from "firebase";
import isNode from "detect-node";

import firebaseConfig from "../../../firebase.config";

import { classes, ui } from "./reducers";

const firebaseInstance = firebase.initializeApp(
  firebaseConfig.config,
  firebaseConfig.key
);

const getFirebase = () => firebaseInstance;

const createStore = state => {
  const rootReducer = combineReducers({ classes, ui });

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

  return createReduxStore(rootReducer, state, enhancer);
};

export default createStore;
