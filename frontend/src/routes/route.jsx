import MainLayout from "../layouts/MainLayout";

import {
    createBrowserRouter,
} from "react-router";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><MainLayout /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    }
])