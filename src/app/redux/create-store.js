import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerForBrowser, routerForExpress } from "redux-little-router";
import thunk from "redux-thunk";
import firebase from "firebase";
import window from "global/window";

import { auth, experiences, ui } from "./reducers";
import routes from "../routes";
import firebaseConfig from "../../../firebase.config";

const firebaseInstance = firebase.initializeApp(
  firebaseConfig.config,
  firebaseConfig.key
);

const thunkMiddleware = thunk.withExtraArgument(firebaseInstance);

const createRootReducer = (routerReducer) => {
  return combineReducers({
    router: routerReducer,
    auth,
    experiences,
    ui
  });
};

export const createStoreOnClient = (state) => {
  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = routerForBrowser({ routes });

  const middleware = applyMiddleware(routerMiddleware, thunkMiddleware);

  const devtoolsEnhancer =
    process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : null;

  const enhancer = devtoolsEnhancer
    ? compose(middleware, routerEnhancer, devtoolsEnhancer)
    : compose(middleware, routerEnhancer);

  const rootReducer = createRootReducer(routerReducer);

  return createStore(rootReducer, state, enhancer);
};

export const createStoreOnServer = (request) => {
  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = routerForExpress({ routes, request });

  const middleware = applyMiddleware(routerMiddleware, thunkMiddleware);
  const enhancer = compose(middleware, routerEnhancer);
  const rootReducer = createRootReducer(routerReducer);

  return createStore(rootReducer, enhancer);
};
