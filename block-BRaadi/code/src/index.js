import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import App from "./components/App";
import { ErrorBoundary } from "./components/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
