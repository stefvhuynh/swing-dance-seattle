import "firebase/database";
import firebase from "firebase/app";
import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import firebaseConfig from "../firebase.config";

import App from "./app";
import createStore from "./app/state/create-store";

import "./app/styles/index.css";

const firebaseInstance = firebase.initializeApp(
  firebaseConfig.config,
  firebaseConfig.key
);

const store = createStore(firebaseInstance, window.APP_STATE);

delete window.APP_STATE;

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
