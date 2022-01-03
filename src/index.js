import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Store } from "./store";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
