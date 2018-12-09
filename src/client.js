import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

import "./app/styles/index.css";

ReactDOM.hydrate(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);
