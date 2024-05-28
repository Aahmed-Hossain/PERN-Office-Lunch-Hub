import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddMeal from "../pages/AddMeal";
import DashboardLayout from "../layouts/DashboardLayout";
import AddedMeals from "../pages/AddedMeals";
import MealDetails from "../components/mealDetails/MealDetails";
import SelectedMeal from "../pages/SelectedMeal";
import MySelectedMeals from "../pages/MySelectedMeals";

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
      {
        path: 'mealDetails/:id',
        element: <MealDetails/>,
        loader: ({params})=>fetch(`http://localhost:3001/meals/${params.id}`)
      }
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
        path: "addMeal/selectedMeal",
        element: <SelectedMeal />,
      },
      {
        path: "addMeal/addedMeals",
        element: <AddedMeals />,
      },
      {
        path: "addMeal/mySelectedMeals",
        element: <MySelectedMeals />,
      },
    ],
  },
]);
export default MainRoutes;
