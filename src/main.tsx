import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/auth/login/page";
import ForgotPasswordPage from "./pages/auth/forgot-password/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
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
