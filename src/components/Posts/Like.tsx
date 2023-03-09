import { useState } from "react";
import { useAuth } from "@/contexts/auth/context";
import { PostServices } from "@/services/post.services";
import { BeatLoader } from "react-spinners";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import { usePost } from "@/contexts/post/context";
import { useToast } from "@/contexts/toast/context";

export default function Like() {
    const postServices = new PostServices();
    const [loading, setLoading] = useState(false);
    const { post, setPost } = usePost();
    const { state: authState } = useAuth();
    const { showErrorToast } = useToast();

    async function like(id: string) {
        setLoading(true);
        const { success, error } = await postServices.likePost(id);
        setLoading(false);

        if (success) return updatePostLikes();
        if (error) return showErrorToast(error);
        return showErrorToast("Something went wrong!");
    }

    return (
        <>
            {loading ? (
                <button
                    disabled
                    className="bg-transparent hover:bg-gray-200 flex-1 rounded-md font-medium text-sm p-1.5 pt-2"
                >
                    <BeatLoader size={8} />
                </button>
            ) : post.likes.includes(authState.user?.id as never) ? (
                <DislikeButton like={like} />
            ) : (
                <LikeButton like={like} />
            )}
        </>
    );

    function updatePostLikes() {
        if (postAlreadyLiked()) return removeLike();
        return addLike();
    }

    function postAlreadyLiked(): boolean {
        const postLikes = post.likes;
        const userid = authState.user?.id as string;
        return postLikes.includes(userid) ? true : false;
    }

    function addLike() {
        const postLikes = post.likes;
        const userid = authState.user?.id as string;
        setPost({
            ...post,
            likes: [...postLikes, userid],
        });
    }

    function removeLike() {
        const postLikes = post.likes;
        const userid = authState.user?.id as string;
        setPost({
            ...post,
            likes: postLikes.filter((str) => str !== userid),
        });
    }
}
