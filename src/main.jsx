import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import "./Styles/global.css";
import Transactions from "./Pages/transactions/index.jsx";
import Login from "./Pages/login/index.jsx";
import Register from "./Pages/register/index.jsx";
import Loans from "./Pages/loans/index.jsx";
import Error from "./Pages/Error/index.jsx";
import Dashboard from "./Pages/dashboard/index.jsx";
import { routes } from "./Routes/index.js";
import TransactionsDetails from "./Pages/transactions/TransactionsDetails.jsx";

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
    path: routes.transactions.root,
    element: <Transactions />,
  },
  {
    path: routes.transactions.details,
    element: <TransactionsDetails />,
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

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./Mock/requests.js");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
});
