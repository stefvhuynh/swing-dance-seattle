import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerForBrowser } from "redux-little-router";
import thunk from "redux-thunk";
import firebase from "firebase";

import { auth, experiences, ui } from "./reducers";
import routes from "../routes";
import firebaseConfig from "../../../firebase.config";

export default () => {
  const {
    reducer: router,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = routerForBrowser({ routes });

  const firebaseInstance = firebase.initializeApp(
    firebaseConfig.config,
    firebaseConfig.key
  );

  const thunkMiddleware = thunk.withExtraArgument(firebaseInstance);

  const middleware = applyMiddleware(routerMiddleware, thunkMiddleware);

  const devtoolsEnhancer = process.env.NODE_ENV !== "production"
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

  const enhancer = devtoolsEnhancer
    ? compose(middleware, routerEnhancer, devtoolsEnhancer)
    : compose(middleware, routerEnhancer);

  const rootReducer = combineReducers({
    auth,
    experiences,
    router,
    ui
  });

  return createStore(rootReducer, enhancer);
};
