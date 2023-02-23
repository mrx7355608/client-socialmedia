import axiosInstance from "../axiosInstance";

interface ILoginData {
    email: string;
    password: string;
}
interface Response {
    success: boolean;
    message: string | null;
}

// TODO: error handling in axios
export class AuthServices {
    private sendResponse(success: boolean, message: string | null): Response {
        return {
            success,
            message,
        };
    }

    async login(loginData: ILoginData): Promise<Response> {
        try {
            await axiosInstance.post("/auth/login", loginData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return this.sendResponse(true, null);
        } catch (err: any) {
            if (err.name === "TypeError") {
                return this.sendResponse(false, "No internet connection");
            }
            return this.sendResponse(false, err.message);
        }
    }
    async signup() {}
    async loginAsGuest() {}
    async logout() {
        try {
            const response = await axiosInstance.post("/auth/logout");
            console.log(response.data);
            if (response.status === 200 && response.data.logout === true) {
                return this.sendResponse(true, null);
            }
            return this.sendResponse(false, null);
        } catch (err: any) {
            return this.sendResponse(false, "Something went wrong");
        }
    }
}
