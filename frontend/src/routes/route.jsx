import MainLayout from "../layouts/MainLayout";

import {
    createBrowserRouter,
} from "react-router";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import Setting from "../pages/Setting/Setting";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../pages/Profile/Profile";
import Message from "../pages/Message/Message";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><MainLayout /></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/message",
                element: <Message />,
            },
            {
                path: "/setting",
                element: <Setting/>
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    }
])