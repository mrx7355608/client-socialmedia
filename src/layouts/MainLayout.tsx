import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/auth/context";
import ToastProvider from "@/contexts/toast/context";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function MainLayout() {
    const { state } = useAuth();

    if (!state.user) return <Navigate to="/auth/login" />;

    return (
        <div className="w-full">
            <Navbar />
            <div className="p-2">
                <ToastProvider>
                    <Outlet />
                </ToastProvider>
            </div>
        </div>
    );
}
