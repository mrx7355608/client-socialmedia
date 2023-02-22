import { config } from "../../config/config";

interface Response {
    success: boolean;
    user: Object | string | null;
}

export class UserServices {
    private sendResponse(success: boolean, user: Object | null): Response {
        return {
            success,
            user,
        };
    }

    async getMe() {
        const url = config.apiUrl + "/users/me";
        const options: RequestInit = {
            method: "GET",
            credentials: "include",
            mode: "cors",
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) return this.sendResponse(false, null);
            return this.sendResponse(true, result);
        } catch (err: any) {
            if (err.name === "TypeError") return this.sendResponse(false, "No internet connection");
            return this.sendResponse(false, "Something went wrong");
        }
    }
}
