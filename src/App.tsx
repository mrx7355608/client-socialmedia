import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layouts
import AuthForms from "./layouts/AuthForms";
// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/auth" element={<AuthForms />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
