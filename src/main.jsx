import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyContext } from "./MyContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContext>
      <App />
    </MyContext>
  </BrowserRouter>
);
