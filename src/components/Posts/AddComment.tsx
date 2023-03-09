import { useAuth } from "@/contexts/auth/context";
import { usePost } from "@/contexts/post/context";
import { useToast } from "@/contexts/toast/context";
import { PostServices } from "@/services/post.services";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { IComment } from "./Comment";

export default function AddComment({
    setComments,
}: {
    setComments: Dispatch<SetStateAction<IComment[]>>;
}) {
    const postServices = new PostServices();
    const [comment, setComment] = useState<string>("");
    const { state } = useAuth();
    const { post } = usePost();
    const { showSuccessToast, showWarningToast, showErrorToast } = useToast();

    return (
        <div className="absolute bottom-0 bg-white w-full flex items-center justify-center gap-x-2 mt-2 p-3">
            <img className="w-8 h-8 rounded-full" src={state.user?.profilePicture} />
            <input
                className="rounded-full w-full p-2 px-3  bg-gray-200 text-sm"
                type="text"
                placeholder="Type your comment here"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
            />
            <button
                onClick={async () => await commentOnPost()}
                className="rounded-md p-1 px-3 pb-1.5 bg-gray-900 text-white text-sm font-medium"
            >
                Post
            </button>
        </div>
    );

    async function commentOnPost() {
        if (!comment) return showWarningToast("Comment cannot be empty");
        const { success, data, error } = await postServices.commentOnPost({
            comment,
            postId: post._id,
        });
        if (error) return showErrorToast(error);
        if (success) {
            setComments((prev) => [data, ...prev]);
            setComment("");
            return showSuccessToast("Comment added successfully!");
        }
    }
}
