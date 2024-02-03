import { createBrowserRouter, redirect } from "react-router-dom"
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Personality from "../views/PersonalityPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      loader: () => {
        return localStorage.access_token ? true : redirect('/login')
    }
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/personality",
      element: <Personality />
    },
  ])

export default router