import axiosInstance from "../axiosInstance";
import serviceHandler from "./serviceHandler";

export class PostServices {
    likePost = serviceHandler<string>(async (id) => {
        const url = `/posts/like/${id}`;
        const response = await axiosInstance.patch(url);
        return response;
    });

    createNewPost = serviceHandler<{ body: string }>(async (data) => {
        const response = await axiosInstance.post("/posts", {
            body: data.body,
        });
        return response;
    });

    getComments = serviceHandler<string>(async (postId: string) => {
        const response = await axiosInstance.get(`/posts/comments/${postId}`);
        return response;
    });
    commentOnPost = serviceHandler<{ comment: string; postId: string }>(async (data) => {
        const { postId, comment } = data;
        const response = await axiosInstance.patch(`/posts/comment/${postId}`, { comment });
        return response;
    });
}
