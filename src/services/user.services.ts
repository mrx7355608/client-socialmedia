import axiosInstance from "../axiosInstance";
import { config } from "../../config/config";

interface Response {
    success: boolean;
    data: Object | string | null;
}

export class UserServices {
    // TODO: create an error handling function for axios errors
    private sendResponse(success: boolean, data: Object | null): Response {
        return {
            success,
            data,
        };
    }

    async getMyFriends() {
        try {
            const response = await axiosInstance.get("/users/me/friends");
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse(false, null);
        }
    }

    async getMe() {
        try {
            const response = await axiosInstance.get("/users/me");
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            if (err.name === "TypeError") return this.sendResponse(false, "No internet connection");
            return this.sendResponse(false, "Something went wrong");
        }
    }

    async getApiHealth() {
        try {
            await axiosInstance.get("/health-check");
            return this.sendResponse(true, null);
        } catch (err) {
            return this.sendResponse(false, null);
        }
    }
}
