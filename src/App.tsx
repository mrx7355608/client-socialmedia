import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layouts
import AuthForms from "./layouts/AuthForms";
import MainLayout from "./layouts/MainLayout";
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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="pending-requests" element={<PendingRequests />} />
                    <Route path="settings">
                        <Route index element={<Settings />} />
                        <Route path="manage-friends" element={<ManageFriends />} />
                    </Route>
                </Route>
                <Route path="/auth" element={<AuthForms />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
