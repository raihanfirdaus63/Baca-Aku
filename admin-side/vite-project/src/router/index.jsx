import { createBrowserRouter, redirect } from "react-router-dom"
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Personality from "../views/PersonalityPage";
import PersonalitiesPage from "../views/PersonalitiesPage";
import NotFoundPage from "../views/NotFoundPage";
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
    {
      path: "/*",
      element:<NotFoundPage/>
    }
  ])

export default router