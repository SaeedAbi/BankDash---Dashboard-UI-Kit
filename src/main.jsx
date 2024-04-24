import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/global.css";
import Testam from "./Components/testam.jsx";
import { Layout } from "./Components/Layout/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout />
    <Testam />
  </React.StrictMode>,
);
