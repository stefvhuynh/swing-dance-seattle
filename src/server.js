import * as functions from "firebase-functions";
import firebase from "firebase-admin";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import firebaseConfig from "../firebase.config";
import manifest from "../webpack-manifest.json";

import html from "./html";
import App from "./app";
import { REDIRECT_STATUS } from "./app/constants";
import createStore from "./app/state/create-store";
import { navigated } from "./app/state/actions";

const firebaseInstance = firebase.initializeApp(
  firebaseConfig.config,
  firebaseConfig.key
);

export const app = functions.https.onRequest((request, response) => {
  const { path } = request;
  const store = createStore(firebaseInstance);

  store.dispatch(navigated(path)).then(() => {
    const routerContext = {};
    const appString = ReactDOMServer.renderToString(
      <StaticRouter location={path} context={routerContext}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    if (routerContext.url) {
      response.redirect(REDIRECT_STATUS, routerContext.url);
    } else {
      const state = store.getState();
      response.send(html(manifest, appString, state));
    }
  });
});
