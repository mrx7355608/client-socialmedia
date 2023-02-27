import axiosInstance from "../axiosInstance";
import { config } from "../../config/config";
import { IPost } from "@/pages/Home";

export class UserServices {
    // TODO: create an error handling function for axios errors
    // TODO: fix "ResponseType"

    // TODO: fix data param type
    private sendResponse<T>(success: boolean, data: T): { success: boolean; data: T } {
        return {
            success,
            data,
        };
    }

    async getMyTimeline<ResponseType>(url: string) {
        try {
            const response = await axiosInstance.get<ResponseType>(url);
            return this.sendResponse<ResponseType>(true, response.data);
        } catch (err: any) {
            return this.sendResponse<ResponseType>(false, err.message);
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

    async search<ResponseType>(url: string) {
        try {
            const response = await axiosInstance.get<ResponseType>(url);
            return this.sendResponse<ResponseType>(true, response.data);
        } catch (err: any) {
            return this.sendResponse<ResponseType>(false, err.message);
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

    async getOneUser(id: string) {
        try {
            const response = await axiosInstance.get(`/users/${id}`);
            return this.sendResponse(true, response.data);
        } catch (err) {
            return this.sendResponse(false, null);
        }
    }
}
