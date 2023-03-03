import React from "react";

export default function CommentAnimation() {
    return (
        <div className="border-0 my-2 w-full">
            <div className="animate-pulse flex items-start gap-x-2">
                <div className="rounded-full h-8 w-8 bg-slate-300"></div>
                <div className="flex flex-col bg-gray-200 rounded-xl p-3">
                    <div className="rounded h-10 w-52"></div>
                </div>
            </div>
        </div>
    );
}
