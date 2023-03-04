import axiosInstance from "../axiosInstance";
import serviceHandler from "./serviceHandler";

export class PostServices {
    likePost = serviceHandler(async (id: string) => {
        const url = `/posts/like/${id}`;
        const response = await axiosInstance.patch(url);
        return response;
    });

    createNewPost = serviceHandler(async (postBody: { body: string }) => {
        const response = await axiosInstance.post("/posts", postBody);
        return response;
    });

    getComments = serviceHandler(async (postId: string) => {
        const response = await axiosInstance.get(`/posts/comments/${postId}`);
        return response;
    });
}
