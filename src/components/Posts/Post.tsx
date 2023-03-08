import { IPost } from "../../interfaces/post.interface";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommentsButton from "./CommentsButton";
import CommentsSection from "./CommentsSection";
import Like from "./Like";
import PostContext from "@/contexts/post/context";

export default function Post({ data }: { data: IPost }) {
    const [showCommentSection, setShowComment] = useState<boolean>(false);
    const [postData, setPost] = useState<IPost>(data);

    return (
        <PostContext.Provider value={{ post: postData, setPost }}>
            <div className="flex flex-col p-4 pb-2 rounded-lg shadow-md bg-white">
                {/* AUTHOR */}
                <div className="flex mb-3 gap-x-2 items-center">
                    <img
                        src={postData.author.profilePicture}
                        alt="author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <Link to={"/users/" + postData.author.authorId}>
                            <p className="text-gray-800 text-sm font-medium hover:underline">
                                {postData.author.firstname + " "}
                                {postData.author.lastname}
                            </p>
                        </Link>
                        <p className="text-xs font-medium text-gray-500">
                            {new Date(postData.createdAt).toDateString()}
                        </p>
                    </div>
                </div>

                {/* POST BODY */}
                <p className="mb-5 mt-1">{postData.body}</p>

                {/* NUMBER OF COMMENTS AND LIKES ON POST */}
                <div className="text-gray-400 mb-2">
                    <span className="mr-3 text-xs">{postData.likes.length} Likes</span>
                    <span className="text-xs">{postData.comments.length} Comments</span>
                </div>

                <hr className="mb-2" />

                {/* LIKE AND COMMENT BUTTON */}
                <div className="flex gap-x-2 bg-transparent">
                    <Like />
                    <CommentsButton setShowComments={setShowComment} />
                </div>

                {/* COMMENTS SECTION */}
                {showCommentSection ? <CommentsSection setShowComments={setShowComment} /> : null}
            </div>
        </PostContext.Provider>
    );
}
