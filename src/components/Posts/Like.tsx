import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth/context";
import { PostServices } from "@/services/post.services";
import { BeatLoader } from "react-spinners";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import { usePost } from "@/contexts/post/context";

export default function Like() {
    const postServices = new PostServices();
    const [loading, setLoading] = useState(false);
    const { post, setPost } = usePost();
    const { state: authState } = useAuth();

    useEffect(() => console.log(post.likes));

    async function like(id: string) {
        // TODO: error handling
        setLoading(true);
        const response = await postServices.likePost(id);
        setLoading(false);
        updatePostLikes();
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
                <DislikeButton like={like} postId={post._id} />
            ) : (
                <LikeButton like={like} postId={post._id} />
            )}
        </>
    );

    function updatePostLikes() {
        // TODO: fix `as never`
        if (!post.likes.includes(authState.user?.id as never)) {
            console.log("add");
            return setPost({
                ...post,
                likes: [...post.likes, authState.user?.id as string],
            });
        }
        console.log("sub");
        return setPost({
            ...post,
            likes: post.likes.filter((str) => str !== authState.user?.id),
        });
    }
}
