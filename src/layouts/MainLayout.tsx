import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="p-2">
                <Outlet />
            </div>
        </div>
    );
}
