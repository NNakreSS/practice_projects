import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//Redux
import { Provider } from "react-redux";
import Store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
