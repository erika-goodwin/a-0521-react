import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";

import { snackReducer } from "./reducer/snackReducer";

const myStore = createStore(snackReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
