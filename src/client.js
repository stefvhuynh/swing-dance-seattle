import "firebase/database";
import firebase from "firebase/app";
import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import debounce from "debounce";

import firebaseConfig from "../firebase.config";

import App from "./app";
import { WINDOW_RESIZE_DEBOUNCE_TIME } from "./app/constants";
import createStore from "./app/state/create-store";
import { windowResized } from "./app/state/actions";

import "./app/styles/index.css";

const firebaseInstance = firebase.initializeApp(
  firebaseConfig.config,
  firebaseConfig.key
);

const store = createStore(firebaseInstance, window.APP_STATE);
store.dispatch(windowResized(window.innerWidth));

delete window.APP_STATE;

const ClientWrapper = ({ children }) => {
  const handleWindowResize = debounce(
    event => store.dispatch(windowResized(event.currentTarget.innerWidth)),
    WINDOW_RESIZE_DEBOUNCE_TIME
  );

  useLayoutEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      handleWindowResize.clear();
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return children;
};

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <ClientWrapper>
        <App />
      </ClientWrapper>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
