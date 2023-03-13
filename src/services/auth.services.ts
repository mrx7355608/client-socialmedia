import axiosInstance from "../axiosInstance";
import serviceHandler from "./serviceHandler";
import { config } from "../../config/config.ts";

interface ILoginData {
    email: string;
    password: string;
}

export class AuthServices {
    login = serviceHandler<ILoginData>(async (loginData) => {
        const response = await axiosInstance.post("/auth/login", loginData);
        return response;
    });

    loginAsGuest = serviceHandler(async () => {
        const guestCreds = {
            email: config.guestEmail,
            password: config.guestPassword
        }
        const response = await axiosInstance.post("/auth/login", guestCreds);
        return response;
    });


    logout = serviceHandler(async () => {
        const response = await axiosInstance.post("/auth/logout");
        return response;
    });
}
