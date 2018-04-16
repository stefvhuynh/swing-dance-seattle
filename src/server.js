import * as functions from "firebase-functions";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";

import assets from "../webpack-assets.json";
import html from "./html";
import { createStoreOnServer } from "./app/redux/create-store";
import { filterSelected } from "./app/redux/actions";
import App from "./app";

export const app = functions.https.onRequest((request, response) => {
  const store = createStoreOnServer(request);
  const route = store.getState().router.route;

  store.dispatch(filterSelected(route)).then(() => {
    const appString = ReactDOMServer.renderToString(
      <Provider store={store}>
        <App/>
      </Provider>
    );
    const state = store.getState();

    response.send(html(appString, state, assets.main));
  });
});
