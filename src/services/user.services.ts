import axiosInstance from "../axiosInstance";
import { IPost } from "interfaces/post.interface";
import { IUser } from "@/contexts/auth/state";
import serviceHandler from "./serviceHandler";

export class UserServices {
    getMyTimeline = serviceHandler<string>(async (url) => {
        const response = await axiosInstance.get<IPost[]>(url);
        return response;
    });

    createPost = serviceHandler<{ body: string }>(async (postData) => {
        const response = await axiosInstance.post<IPost>("/posts", postData);
        return response;
    });

    search = serviceHandler<string>(async (url: string) => {
        const response = await axiosInstance.get(url);
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

    getOneUser = serviceHandler<string>(async (id) => {
        const response = await axiosInstance.get(`/users/${id}`);
        return response;
    });

    updatePicture = serviceHandler<FormData>(async (file) => {
        const response = await axiosInstance.patch("/users/me/change-picture", file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    });

    sendFriendRequest = serviceHandler<string>(async (id: string) => {
        const response = await axiosInstance.post(`/users/send-friend-request/${id}`);
        return response
    });
}
