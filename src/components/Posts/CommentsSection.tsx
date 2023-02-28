import { useAuth } from "@/contexts/auth/context";
import React from "react";
import { Link } from "react-router-dom";

interface ICommentSectionProps {
    comments: [];
}

export default function CommentsSection({ comments }: ICommentSectionProps) {
    return (
        <div className="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg w-11/12 h-4/5">
            {/* Heading / Title */}
            <div className="w-full text-center p-3 shadow-sm ">
                <h3 className="font-medium">User 03's Post</h3>
            </div>

            {/* Comments list */}
            <div className="overflow-scroll flex flex-col items-start justify-start p-4 max-h-full">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>

            {/* Add your comment */}
            <AddComment />
        </div>
    );
}

function AddComment() {
    const { state } = useAuth();
    return (
        <div className="absolute bottom-0 bg-white w-full flex items-center justify-center gap-x-2 mt-2 p-3">
            <img className="w-8 h-8 rounded-full" src={state.user?.profilePicture} />
            <input
                className="rounded-full w-full p-2 px-3  bg-gray-200 text-sm"
                type="text"
                placeholder="Type your comment here"
            />
            <button className="rounded-md p-1 px-3 pb-1.5 bg-gray-900 text-white text-sm font-medium">
                Post
            </button>
        </div>
    );
}

function Comment() {
    return (
        <div className="flex gap-x-2 bg-transparent mt-3">
            <img className="w-8 h-8 rounded-full" src="/user.png" alt="friend" />
            <div className="flex flex-col bg-gray-200 rounded-xl p-3 ">
                <Link to="">
                    <p className="text-gray-800 text-sm font-medium hover:underline">User 01</p>
                </Link>
                <p className=" text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectet...
                </p>
            </div>
        </div>
    );
}
