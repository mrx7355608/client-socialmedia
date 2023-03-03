import { useState } from "react";
import { PostServices } from "@/services/post.services";
import { BeatLoader } from "react-spinners";

interface IAddPostModal {
    closeModal: () => void;
    disabled: boolean;
    checkDisable: (body: string) => void;
}

export default function AddPostModal({ closeModal, disabled, checkDisable }: IAddPostModal) {
    const postServices = new PostServices();
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        body: "",
    });

    return (
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
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        checkDisable(e.target.value);
                        setPostData({ body: e.target.value });
                    }}
                ></textarea>

                {!loading ? (
                    <button
                        onClick={createNewPost}
                        disabled={disabled}
                        className={`mt-3 rounded-md w-full py-2 font-medium ${
                            disabled ? "text-gray-300 bg-gray-800" : "text-white bg-gray-900"
                        }`}
                    >
                        Post
                    </button>
                ) : (
                    <button disabled className="mt-3 rounded-md w-full py-2 font-medium">
                        <BeatLoader size={8} color="white" />
                    </button>
                )}
            </div>
        </div>
    );

    async function createNewPost() {
        setLoading(true);
        const { success, data } = await postServices.createNewPost(postData);
        setLoading(false);
        console.log(data);
    }
}
