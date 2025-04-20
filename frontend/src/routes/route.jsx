import MainLayout from "../layouts/MainLayout";

import {
    createBrowserRouter,
} from "react-router";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><MainLayout /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <div>Home </div>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    }
])