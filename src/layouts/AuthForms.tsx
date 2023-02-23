import { useAuth } from "../contexts/auth/context";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthForms() {
    const { state } = useAuth();
    if (state.user) return <Navigate to="/" />;

    return (
        <div className="font-serif flex flex-col items-center justify-center min-w-screen min-h-screen">
            <div className="flex items-center justify-center gap-x-3 mb-8 mx-auto">
                <img src="/logo.svg" alt="logo" className="w-4 h-auto" />
                <h2 className="text-3xl font-bold text-gray-800">Social Media</h2>
            </div>
            <Outlet />
        </div>
    );
}
