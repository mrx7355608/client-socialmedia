import React, { Dispatch, SetStateAction } from "react";
import { BiComment } from "react-icons/bi";

export default function CommentsButton({
    setShowComments,
}: {
    setShowComments: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <button
            onClick={() => {
                setShowComments(true);
            }}
            className="bg-transparent hover:bg-gray-200 flex-1 rounded-md font-medium text-sm p-1.5"
        >
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
