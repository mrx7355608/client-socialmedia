import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
