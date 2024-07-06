import React from "react";
import ReactDOM from "react-dom/client";
// COMPONENT
import App from "./App.jsx";
// STYLES
import "./index.css";
// ROUTER
import { BrowserRouter as Router } from "react-router-dom";
// REDUX
import { Provider } from "react-redux";
import Store from "./redux/store.jsx";
// UI KIT
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <Router>
      <NextUIProvider>
          <App />
      </NextUIProvider>
    </Router>
  </Provider>
);
