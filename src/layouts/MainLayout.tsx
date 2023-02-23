import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/auth/context";
import { Navigate, Outlet } from "react-router-dom";

export default function MainLayout() {
    const { state } = useAuth();
    if (!state.user) return <Navigate to="/auth/login" />;

    return (
        <div className="w-full">
            <Navbar />
            <div className="p-2">
                <Outlet />
            </div>
        </div>
    );
}
