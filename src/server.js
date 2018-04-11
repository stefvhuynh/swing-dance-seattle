import * as functions from "firebase-functions";

import html from "./html";

export const app = functions.https.onRequest((req, res) => {
  res.send(html());
});
