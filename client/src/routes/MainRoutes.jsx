import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddMeal from "../pages/AddMeal";
import DashboardLayout from "../layouts/DashboardLayout";
import AcceptedMeal from "../pages/AcceptedMeal";
import AddedMeals from "../pages/AddedMeals";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "addMeal",
        element: <AddMeal />,
      },
      {
        path: "addMeal/acceptedMeal",
        element: <AcceptedMeal />,
      },
      {
        path: "addMeal/addedMeals",
        element: <AddedMeals />,
      },
    ],
  },
]);
export default MainRoutes;
