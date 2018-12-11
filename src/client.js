import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import createStore from "./app/state/create-store";
import App from "./app";
import { windowResized } from "./app/state/actions";

import "./app/styles/index.css";

const store = createStore(window.APP_STATE);
store.dispatch(windowResized(window.innerWidth));

delete window.APP_STATE;

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
