import { config } from "../../config/config";

interface ILoginData {
    email: string;
    password: string;
}
interface Response {
    success: boolean;
    message: string | null;
}

export class AuthServices {
    private sendResponse(success: boolean, message: string | null): Response {
        return {
            success,
            message,
        };
    }

    async login(loginData: ILoginData): Promise<Response> {
        const url = config.apiUrl + "/auth/login";
        const options: RequestInit = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(loginData),
            headers: {
                "Content-type": "application/json",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) {
                return this.sendResponse(false, result.error);
            }
            return this.sendResponse(true, null);
        } catch (err: any) {
            if (err.name === "TypeError") {
                return this.sendResponse(false, "No internet connection");
            }
            return this.sendResponse(false, "An un-expected error occured");
        }
    }
    async signup() {}
    async loginAsGuest() {}
    async logout() {}
}
