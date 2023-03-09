import { usePost } from "@/contexts/post/context";
import useFetch from "@/hooks/useFetch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CommentAnimation from "../SkeletonAnimations/CommentAnimation";
import AddComment from "./AddComment";
import Comment, { IComment } from "./Comment";
import { RxCross2 } from "react-icons/rx";

interface ICommentSectionProps {
    setShowComments: Dispatch<SetStateAction<boolean>>;
}

export default function CommentsSection({ setShowComments }: ICommentSectionProps) {
    const { post } = usePost();
    const { loading, data, err } = useFetch<IComment[]>(`/posts/comments/${post._id}`, []);
    const [comments, setCommets] = useState<IComment[]>(data);

    useEffect(() => {
        if (data.length > 1) return setCommets(data);
    }, [data]);

    return (
        <div className="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-11/12 h-4/5">
            {/* Heading / Title */}
            <div className="w-full text-center p-3 shadow-sm flex justify-between bg-gray-800 text-white">
                <h3 className="font-medium">User 03's Post</h3>
                <button className="text-lg font-light" onClick={() => setShowComments(false)}>
                    <RxCross2 />
                </button>
            </div>

            {/* Comments list */}
            <div className="overflow-y-scroll flex flex-col items-start justify-start p-4 h-4/5 pt-0">
                {err ? <h3 className="font-medium text-red-600">{err}</h3> : null}
                {loading ? (
                    <>
                        <CommentAnimation />
                        <CommentAnimation />
                        <CommentAnimation />
                    </>
                ) : (
                    // TODO: add pagination (Inifinite scroll component)
                    comments.map((cmnt) => {
                        return <Comment key={cmnt._id} comment={cmnt} />;
                    })
                )}
            </div>

            {/* Add comment box for user */}
            <AddComment setComments={setCommets} />
        </div>
    );
}
