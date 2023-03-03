import axiosInstance from "../axiosInstance";
import { IPost } from "interfaces/post.interface";
import { IUser } from "@/contexts/auth/state";
import serviceHandler from "./serviceHandler";

export class UserServices {
    // TODO: create an error handling function for axios errors
    // TODO: fix "ResponseType"

    // TODO: fix data param type
    private sendResponse<T>(success: boolean, data: T | null, error: string | null = null) {
        return {
            success,
            data,
            error,
        };
    }

    private handleError(err: any): string {
        if (err.response) {
            return err.response.data.error;
        } else if (err.request) {
            return "It seems that server is down";
        } else {
            return "An un-expected error occured";
        }
    }

    getMyTimeline = serviceHandler(async (url: string) => {
        const response = await axiosInstance.get<IPost[]>(url);
        return response;
    });

    async createPost(postData: { body: string }) {
        try {
            const response = await axiosInstance.post<IPost>("/posts", postData);
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse(false, null, err.message);
        }
    }

    async search(url: string) {
        try {
            const response = await axiosInstance.get<IUser[]>(url);
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse<null>(false, null, err.message);
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
            const errorMessage = this.handleError(err);
            return this.sendResponse(false, errorMessage);
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

    async updatePicture(file: any) {
        try {
            const response = await axiosInstance.patch("/users/me/change-picture", file, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse(false, err.message);
        }
    }
}
