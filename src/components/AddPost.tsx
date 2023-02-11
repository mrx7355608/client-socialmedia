import React, { useState } from "react";

export default function AddPost() {
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(true);

    return (
        <>
            <div className="p-3 rounded-lg shadow-md flex justify-center items-center bg-white gap-x-2">
                {/* User Image */}
                <img
                    src="/user.png"
                    className="rounded-full w-9 h-9 bg-black"
                />
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
                                className="rounded-full bg-gray-200 p-1 px-3 text-gray-400 font-medium text-gray-800"
                            >
                                x
                            </span>
                        </div>

                        {/* Post textarea */}
                        <textarea
                            name="body"
                            rows={5}
                            placeholder="Share your thoughts"
                            className="rounded-lg w-full p-2"
                            onChange={(
                                e: React.ChangeEvent<HTMLTextAreaElement>
                            ) => {
                                checkDisable(e.target.value);
                            }}
                        ></textarea>

                        <button
                            disabled={disabled}
                            className={`mt-3 rounded-md w-full py-2 font-medium ${
                                disabled
                                    ? "text-gray-300 bg-gray-800"
                                    : "text-white bg-gray-900"
                            }`}
                        >
                            Post
                        </button>
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
}
