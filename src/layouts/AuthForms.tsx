import { Outlet } from "react-router-dom";

export default function AuthForms() {
    return (
        <div className="flex items-center justify-space-between mw-100 mh-100">
            <Outlet />
        </div>
    );
}
