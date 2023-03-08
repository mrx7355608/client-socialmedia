import { useAuth } from "../../contexts/auth/context";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IPost } from "interfaces/post.interface";
import { BeatLoader } from "react-spinners";
import { PostServices } from "@/services/post.services";

export default function AddPost({
    setPosts,
    posts,
}: {
    setPosts: Dispatch<SetStateAction<IPost[]>>;
    posts: IPost[];
}) {
    const { state } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [err, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        body: "",
    });
    const postServices = new PostServices();

    // TODO: add z-index
    return (
        <>
            <div className="mb-4 rounded-lg shadow-md flex justify-center items-center bg-white gap-x-2 p-3">
                {/* User Image */}
                <img src={state.user?.profilePicture} className="rounded-full w-9 h-9 bg-black" />
                {/* Post toggle */}
                <span
                    onClick={openModal}
                    className="w-full text-gray-500 rounded-full bg-gray-100 px-3 py-1.5"
                >
                    Share your thoughts
                </span>
            </div>

            {/* MODAL */}
            {showModal ? (
                <div className="flex items-center justify-center w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50 p-3">
                    <div className="p-3 rounded-lg w-full bg-white shadow-xl">
                        {/* Heading and Close button */}
                        <div className="flex justify-between mb-2 p-1">
                            <h3 className="text-lg font-bold">Create Post</h3>
                            <span
                                onClick={closeModal}
                                className="rounded-full bg-gray-200 p-1 px-3 font-medium text-gray-800"
                            >
                                x
                            </span>
                        </div>

                        {/* Post textarea */}
                        <textarea
                            name="body"
                            rows={5}
                            placeholder="Share your thoughts"
                            className="rounded-lg w-full p-2 border-2 border-gray-800 outline-0"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                checkDisable(e.target.value);
                                setPostData({ body: e.target.value });
                            }}
                        ></textarea>
                        <span className="text-red-600 font-medium text-xs">{err}</span>

                        {!loading ? (
                            <button
                                onClick={createNewPost}
                                disabled={disabled}
                                className={`mt-3 rounded-md w-full py-2 font-medium ${
                                    disabled
                                        ? "text-gray-300 bg-gray-800"
                                        : "text-white bg-gray-900"
                                }`}
                            >
                                Post
                            </button>
                        ) : (
                            <button
                                disabled
                                className="mt-3 rounded-md w-full py-2 font-medium bg-gray-900"
                            >
                                <BeatLoader size={8} color="white" />
                            </button>
                        )}
                    </div>
                </div>
            ) : null}
        </>
    );

    function openModal() {
        setDisabled(true);
        return setShowModal(true);
    }
    function closeModal() {
        return setShowModal(false);
    }
    function checkDisable(postBody: string) {
        if (postBody.trim()) return setDisabled(false);
        return setDisabled(true);
    }
    async function createNewPost() {
        setLoading(true);
        const { success, data, error } = await postServices.createNewPost(postData);
        setLoading(false);
        if (error) return setError(error);
        closeModal();
        return setPosts([data, ...posts]);
    }
}
