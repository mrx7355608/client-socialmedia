import { useEffect } from "react";
import { UserServices } from "@/services/user.services";
import { useAuth } from "@/contexts/auth/context";
import { apiDown, userDataFetched, requestFinishedProcessing } from "@/contexts/auth/reducer";
import { IUser } from "@/contexts/auth/state";
import { Navigate } from "react-router-dom";
import Spinner from "@/components/Spinner";

export default function useUserData() {
    const userServices = new UserServices();
    const { state, dispatch } = useAuth();

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
}
