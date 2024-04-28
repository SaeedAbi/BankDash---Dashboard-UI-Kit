import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/global.css";
import Transactions from "./Pages/transactions/index.jsx";
import Login from "./Pages/login/index.jsx";
import Register from "./Pages/register/index.jsx";
import Loans from "./Pages/loans/index.jsx";
import Error from "./Pages/Error/index.jsx";
import Dashboard from "./Pages/dashboard/index.jsx";
import { routes } from "./Routes/index.js";
import {  RouterProvider,  from "react-router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: routes.dashboard,
    element: <Dashboard />,
  },
  {
    path: routes.loans,
    element: <Loans />,
  },
  {
    path: routes.transactions,
    element: <Transactions />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
