import {
    createBrowserRouter,
  } from "react-router";
import MainLayout from "../layouts/MainLayout";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Home </div>,
      },
    ],
  },
])