import { Routes, Route, Navigate } from "react-router-dom";
// Layouts
import AuthForms from "@/layouts/AuthForms";
import MainLayout from "@/layouts/MainLayout";
// Pages
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/User/Profile";
import Settings from "@/pages/User/Settings";
import ManageFriends from "@/pages/User/ManageFriends";
import PendingRequests from "@/pages/User/PendingRequests";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import ResetPassword from "@/pages/Auth/ResetPassword";
import ResendVerificationEmail from "@/pages/Auth/ResendVerificationEmail";
import RemoveAccount from "@/pages/User/RemoveAccount";
import ChangePassword from "@/pages/User/ChangePassword";
import UpdateProfilePicture from "@/pages/User/UpdateProfilePicture";
import useUserData from "./hooks/useUserData";
import { useAuth } from "./contexts/auth/context";
import Spinner from "./components/Spinner";
import { useState } from "react";

function App() {
    const { state } = useAuth();

    // Fetch logged in user data from server
    // and updates the auth state
    useUserData();

    if (state.isLoading) return <Spinner />;
    if (state.error) return <h3 className="text-3xl text-gray-800">{state.error}</h3>;

    return (
        <Routes>
            {/* Main Routes */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="pending-requests" element={<PendingRequests />} />
                <Route path="settings">
                    <Route index element={<Settings />} />
                    <Route path="manage-friends" element={<ManageFriends />} />
                    <Route path="update-picture" element={<UpdateProfilePicture />} />
                    <Route path="change-password" element={<ChangePassword />} />
                    <Route path="remove-account" element={<RemoveAccount />} />
                </Route>
            </Route>

            {/* Auth Routes */}
            <Route path="/auth" element={<AuthForms />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="resend-verification-email" element={<ResendVerificationEmail />} />
                <Route path="reset-password" element={<ResetPassword />} />
            </Route>

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
