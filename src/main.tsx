import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/auth/login/page";
import ForgotPasswordPage from "./pages/auth/forgot-password/page";
import DashboardPage from "./pages/dashboard/page";
import Expenses from "./pages/dashboard/expenses/page";
import Balances from "./pages/dashboard/balances/page";
import Transactions from "./pages/dashboard/transactions/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/expenses",
    element: <Expenses />,
  },
  {
    path: "/balances",
    element: <Balances />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
