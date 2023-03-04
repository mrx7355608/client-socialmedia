import axiosInstance from "../axiosInstance";
import serviceHandler from "./serviceHandler";

interface ILoginData {
    email: string;
    password: string;
}

export class AuthServices {
    login = serviceHandler(async (loginData: ILoginData) => {
        const response = await axiosInstance.post("/auth/login", loginData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    });

    logout = serviceHandler(async () => {
        const response = await axiosInstance.post("/auth/logout");
        return response;
    });
}
