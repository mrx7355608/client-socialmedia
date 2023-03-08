import { IPost } from "interfaces/post.interface";
import { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode } from "react";

const PostContext = createContext<{
    post: IPost;
    setPost: Dispatch<SetStateAction<IPost>>;
}>({
    post: {} as any,
    setPost: () => null,
});
export const usePost = () => useContext(PostContext);

export default PostContext;
