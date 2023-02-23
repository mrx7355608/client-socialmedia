import { useAuth } from "../../contexts/auth/context";
import { Link, useNavigate } from "react-router-dom";
import { AuthServices } from "../../services/auth.services";
import { logoutUser } from "../../contexts/auth/reducer";

export default function Settings() {
    const authServices = new AuthServices();
    const navigateTo = useNavigate();
    const { dispatch } = useAuth();

    return (
        <div className="flex flex-col gap-y-2 p-4 bg-white h-2/4 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold text-gray-800">Settings</h3>
            <button className="text-left w-full rounded-md hover:bg-gray-100 p-3 px-4 font-medium bg-white">
                <Link to="manage-friends">Manage friends</Link>
            </button>
            <button className="text-left w-full rounded-md hover:bg-gray-100 p-3 px-4 font-medium bg-white">
                Update profile picture
            </button>
            <button className="text-left w-full rounded-md hover:bg-gray-100 p-3 px-4 font-medium bg-white ">
                Change password
            </button>
            <button className="text-left w-full rounded-md hover:bg-gray-100 p-3 px-4 font-medium bg-white">
                Remove account
            </button>
            <button
                onClick={async () => await logout()}
                className="text-left w-full rounded-md hover:bg-red-100 p-3 px-4 font-medium text-red-700"
            >
                Logout
            </button>
        </div>
    );

    async function logout() {
        const { success, message } = await authServices.logout();
        if (!success && message) return alert(message);
        if (!success) return alert("There was a problem while logging out");
        dispatch(logoutUser());
        return navigateTo("/auth/login");
    }
}
