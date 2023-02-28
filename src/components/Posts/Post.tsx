import { useAuth } from "@/contexts/auth/context";
import { IPost } from "@/pages/Home";
import { useState } from "react";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import CommentsSection from "./CommentsSection";
import Like from "./Like";

export default function Post({ data }: { data: IPost }) {
    const [postData, setPostData] = useState<IPost>(data);
    const { state } = useAuth();

    return (
        <div className="flex flex-col p-4 pb-2 my-4 rounded-lg shadow-md bg-white">
            {/* Author */}
            <div className="flex mb-3 gap-x-2 items-center">
                <img
                    src={postData.author.profilePicture}
                    alt="author"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <Link to={"/users/" + postData.author.authorId}>
                        <p className="text-gray-800 text-sm font-medium hover:underline">
                            {postData.author.fullname}
                        </p>
                    </Link>
                    <p className="text-xs font-medium text-gray-500">
                        {new Date(postData.createdAt).toDateString()}
                    </p>
                </div>
            </div>

            {/* Post body */}
            <p className="mb-5 mt-1">{postData.body}</p>

            {/* Total likes and comments on post */}
            <div className="text-gray-400 mb-2">
                {/* TODO: use icons */}
                <span className="mr-3 text-xs">{postData.likes.length} Likes</span>
                <span className="text-xs">{postData.comments.length} Comments</span>
            </div>

            <hr className="mb-2" />

            {/* Like and Comment button */}
            <div className="flex gap-x-2 bg-transparent">
                {/* Like button */}
                <Like
                    postLikes={postData.likes}
                    postId={postData._id}
                    updatePostLikes={updatePostLikes}
                />
                {/* Comments button */}
                <CommentsButton />
            </div>
            {/* <CommentsSection comments={postData.comments} /> */}
        </div>
    );

    function updatePostLikes() {
        // TODO: fix `as never`
        if (!postData.likes.includes(state.user?.id as never)) {
            return setPostData({
                ...postData,
                likes: [...postData.likes, state.user?.id as string],
            });
        }
        return setPostData({
            ...postData,
            likes: postData.likes.filter((str) => str !== state.user?.id),
        });
    }
}

function CommentsButton() {
    return (
        <button className="bg-transparent hover:bg-gray-200 flex-1 rounded-md font-medium text-sm p-1.5">
            <BiComment
                size="18px"
                style={{
                    display: "inline",
                    color: "inherit",
                    marginRight: "6px",
                }}
            />
            Comment
        </button>
    );
}