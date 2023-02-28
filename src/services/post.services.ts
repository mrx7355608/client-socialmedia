import axiosInstance from "../axiosInstance";

export class PostServices {
    private sendResponse<T>(success: boolean, data: T) {
        return {
            success,
            data,
        };
    }

    async likePost(id: string) {
        try {
            const url = `/posts/like/${id}`;
            const response = await axiosInstance.patch(url);
            return this.sendResponse(true, response.data);
        } catch (err: any) {
            return this.sendResponse<string>(true, err.message);
        }
    }
}
