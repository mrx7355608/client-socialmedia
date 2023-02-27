import axiosInstance from "../axiosInstance";
import { config } from "../../config/config";

interface Response {
    success: boolean;
    data: Object | string | null;
}

export class UserServices {
    // TODO: create an error handling function for axios errors

    // TODO: fix data param type
    private sendResponse(success: boolean, data: Object | null): Response {
        return {
            success,
            data,
        };
    }

    async getMyTimeline() {
        try {
            const response = await axiosInstance.get("/posts/me/timeline");
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse(false, err.message);
        }
    }
    async createPost(postData: { body: string }) {
        try {
            const response = await axiosInstance.post("/posts", postData);
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse(false, err.message);
        }
    }

    async search(searchQuery: string) {
        try {
            const url = "/users/search?user=" + searchQuery;
            const response = await axiosInstance.get(url);
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse(false, err.message);
        }
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
