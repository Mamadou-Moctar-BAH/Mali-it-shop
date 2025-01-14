// Import Libaries
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// Import CSS
import "./index.css";
// Import Container
import App from "./Container/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
