import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStoreOnClient } from "./app/redux/create-store";
import { appInitialized, windowResized } from "./app/redux/actions";
import App from "./app";

import "./app/styles/index.css";

const store = createStoreOnClient(window.__REDUX_STATE__);

delete window.__REDUX_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(appInitialized());
store.dispatch(windowResized(window.innerWidth));
