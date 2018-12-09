import * as functions from "firebase-functions";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import manifest from "../webpack-manifest.json";
import html from "./html";
import App from "./app";

const REDIRECT_STATUS = 301;

export const app = functions.https.onRequest((request, response) => {
  const context = {};

  const appString = ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <App/>
    </StaticRouter>
  );

  if (context.url) {
    response.redirect(REDIRECT_STATUS, context.url);
  } else {
    response.send(html(appString, manifest));
  }
});
