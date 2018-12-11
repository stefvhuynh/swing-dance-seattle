import * as functions from "firebase-functions";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import manifest from "../webpack-manifest.json";

import html from "./html";
import App from "./app";
import createStore from "./app/state/create-store";
import { navigated } from "./app/state/actions";

const REDIRECT_STATUS = 301;

export const app = functions.https.onRequest((request, response) => {
  const context = {};

  if (context.url) {
    response.redirect(REDIRECT_STATUS, context.url);
  } else {
    const store = createStore();

    store.dispatch(navigated(request.path)).then(() => {
      const appString = ReactDOMServer.renderToString(
        <StaticRouter location={request.path} context={context}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>
      );

      const state = store.getState();

      response.send(html(manifest, appString, state));
    });
  }
});
