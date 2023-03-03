import { useAuth } from "../../contexts/auth/context";
import React, { useState } from "react";
import AddPostModal from "./PostModal";

export default function AddPost() {
    const { state } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(true);

    // TODO: add z-index
    return (
        <>
            <div className="rounded-lg shadow-md flex justify-center items-center bg-white gap-x-2 p-3">
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
                <AddPostModal
                    checkDisable={checkDisable}
                    disabled={disabled}
                    closeModal={closeModal}
                />
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
