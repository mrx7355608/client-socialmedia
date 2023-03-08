import useFetch from "@/hooks/useFetch";
import { Dispatch, SetStateAction } from "react";
import CommentAnimation from "../SkeletonAnimations/CommentAnimation";
import AddComment from "./AddComment";
import Comment, { IComment } from "./Comment";

interface ICommentSectionProps {
    setShowComments: Dispatch<SetStateAction<boolean>>;
    postId: string;
}

export default function CommentsSection({ setShowComments, postId }: ICommentSectionProps) {
    const { loading, data: comments, err } = useFetch<IComment[]>(`/posts/${postId}/comments`, []);

    return (
        <div className="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-11/12 h-4/5">
            {/* Heading / Title */}
            <div className="w-full text-center p-3 shadow-sm ">
                <h3 className="font-medium">User 03's Post</h3>
                <button onClick={() => setShowComments(false)}>Close</button>
            </div>

            {/* Comments list */}
            <div className="overflow-scroll flex flex-col items-start justify-start p-4 max-h-full">
                {loading ? (
                    <>
                        <CommentAnimation />
                        <CommentAnimation />
                        <CommentAnimation />
                    </>
                ) : (
                    // TODO: add pagination
                    comments.map((cmnt) => {
                        return <Comment key={cmnt._id} comment={cmnt} />;
                    })
                )}
            </div>

            {/* Add comment box for user */}
            <AddComment />
        </div>
    );
}
