import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserServices } from "../services/user.services";
import { useAuth } from "../contexts/auth/context";
import { apiDown, requestFinishedProcessing, userDataFetched } from "../contexts/auth/reducer";
import { IUser } from "../contexts/auth/state";

export default function MainLayout() {
    const { state, dispatch } = useAuth();
    const userServices = new UserServices();

    useEffect(() => {
        // Check if api is running properly or not
        async function checkApi() {
            const response = await userServices.getApiHealth();
            if (response.success) return true;
            dispatch(apiDown());
            return false;
        }

        // Fetch user data
        async function getUserData() {
            const { success, user } = await userServices.getMe();
            if (success) return dispatch(userDataFetched(user as IUser));
            return dispatch(requestFinishedProcessing());
        }

        (async function () {
            // if (await checkApi()) {
            //     await getUserData();
            // }
            await getUserData();
        })();
    }, []);

    if (state.isLoading) {
        return <h3 className="font-medium text-3xl text-center text-gray-800">Loading...</h3>;
    }
    if (state.error) {
        return (
            <h3 className="font-bold text-red-800 my-auto text-center text-3xl">{state.error}</h3>
        );
    }

    // If the user is not authorized
    // Redirect him to login page
    if (!state.user) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <div className="w-full">
            <Navbar />
            <div className="p-2">
                <Outlet />
            </div>
        </div>
    );
}
