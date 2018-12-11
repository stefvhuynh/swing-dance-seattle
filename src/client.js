import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import createStore from "./app/state/create-store";
import App from "./app";

import "./app/styles/index.css";

const state = window.APP_STATE;
const store = createStore(state);

delete window.APP_STATE;

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
