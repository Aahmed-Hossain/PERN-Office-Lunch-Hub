import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home/>
        },
      

    ],
  },
  {
    path:'/login',
    element: <Login/>
},
  {
    path:'/register',
    element: <Register/>
},

]);
export default MainRoutes;
