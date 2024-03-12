import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./views/login";
import Signup from "./views/signup";
import User from "./views/user";
import NotFound from "./views/notfound";
import Dashboard from "./views/dashboard";

import DefaultLayout from "./components/defaultlayout";
import GuestLayout from "./components/guestlayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/user" />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/user',
                element: <User />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;
