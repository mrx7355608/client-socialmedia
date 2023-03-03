import axiosInstance from "../axiosInstance";
import { IPost } from "interfaces/post.interface";
import { IUser } from "@/contexts/auth/state";
import serviceHandler from "./serviceHandler";

export class UserServices {
    getMyTimeline = serviceHandler(async (url: string) => {
        const response = await axiosInstance.get<IPost[]>(url);
        return response;
    });

    createPost = serviceHandler(async (postData: { body: string }) => {
        const response = await axiosInstance.post<IPost>("/posts", postData);
        return response;
    });

    search = serviceHandler(async (url: string) => {
        const response = await axiosInstance.get(url);
        return response;
    });

    getMyFriends = serviceHandler(async () => {
        const response = await axiosInstance.get("/users/me/friends");
        return response;
    });

    getMe = serviceHandler(async () => {
        const response = await axiosInstance.get("/users/me");
        return response;
    });

    getApiHealth = serviceHandler(async () => {
        const response = await axiosInstance.get("/health-check");
        return response;
    });

    getOneUser = serviceHandler(async (id: string) => {
        const response = await axiosInstance.get(`/users/${id}`);
        return response;
    });

    updatePicture = serviceHandler(async (file: any) => {
        const response = await axiosInstance.patch("/users/me/change-picture", file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    });
}
