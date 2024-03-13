import { Outlet } from "react-router-dom";
import { useStateContext } from "../context/contectProvider";
import { createBrowserRouter, Navigate } from "react-router-dom";

export default function GuestLayout() {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
