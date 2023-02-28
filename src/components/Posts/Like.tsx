import { useState } from "react";
import { useAuth } from "@/contexts/auth/context";
import { PostServices } from "@/services/post.services";
import { BeatLoader } from "react-spinners";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

interface ILikeComponentProps {
    postLikes: string[];
    postId: string;
    updatePostLikes: () => void;
}

export default function Like({ postLikes, postId, updatePostLikes }: ILikeComponentProps) {
    const postServices = new PostServices();
    const [loading, setLoading] = useState(false);

    const { state: authState } = useAuth();

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
            ) : postLikes.includes(authState.user?.id as never) ? (
                <DislikeButton like={like} postId={postId} />
            ) : (
                <LikeButton like={like} postId={postId} />
            )}
        </>
    );
}
