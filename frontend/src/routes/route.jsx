import MainLayout from "../layouts/MainLayout";

import {
    createBrowserRouter,
} from "react-router";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../pages/Profile/Profile";
import Message from "../pages/Message/Message";
import SettingLayout from "../layouts/SettingLayout";
import UpdateProfile from "../pages/Setting/UpdateProfile";
import ChangePassword from "../pages/Setting/ChangePassword";
import VerifyBadge from "../pages/Setting/VerifyBadge";
import Register from "../pages/Login/Register";



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

        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/setting",
        element: <PrivateRoute><SettingLayout/></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/setting",
                element: <UpdateProfile/>,
            },
            {
                path: "/setting/change-password",
                element: <ChangePassword/>,
            },
            {
                path: "/setting/verify-badge",
                element: <VerifyBadge/>,
            },
        ]
    }
])