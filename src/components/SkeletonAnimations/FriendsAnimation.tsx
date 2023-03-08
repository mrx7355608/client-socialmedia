import React from "react";

export default function FriendAnimation() {
    return (
        <div className="flex flex-col bg-white border-0 my-2 shadow-lg rounded-lg p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex-col">
                <div className="flex items-center gap-x-2 w-full">
                    {/* Profile picture circle */}
                    <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                    {/* Name and Posted at lines */}
                    <div className="flex flex-col gap-y-2">
                        <div className="h-3 bg-slate-400 rounded w-32"></div>
                        <div className="h-3 bg-slate-400 rounded w-28"></div>
                    </div>
                </div>
            </div>
            {/* View profile and Remove Friend buttons */}
            <div className="animate-pulse flex gap-x-3 mt-5">
                <div className="flex-1 h-6 bg-slate-400 rounded-md my-auto"></div>
                <div className="flex-1  h-6 bg-slate-400 rounded-md my-auto"></div>
            </div>
        </div>
    );
}
