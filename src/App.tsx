import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/auth/context";
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
import useUserData from "@/hooks/useUserData";
import Spinner from "@/components/Spinner";
import UserPosts from "@/pages/User/UserPosts";
import UserPhotos from "@/pages/User/UserPhotos";
import UserFriends from "@/pages/User/UserFriends";
import SearchPage from "@/pages/Search";
import OneUser from "./pages/User/OneUser";

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
                <Route path="search" element={<SearchPage />} />
                <Route path="users/:id" element={<OneUser />} />
                <Route path="pending-requests" element={<PendingRequests />} />

                <Route path="profile" element={<Profile />}>
                    <Route index element={<UserPosts />} />
                    <Route path="friends" element={<UserFriends />} />
                    <Route path="photos" element={<UserPhotos />} />
                </Route>

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
