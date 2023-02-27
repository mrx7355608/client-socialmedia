import React from "react";

export default function UserBoxAnimations() {
    return (
        <div className="flex justify-between bg-white border-0 my-3 shadow-lg rounded-lg p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex-col">
                {/* Profile picture circle */}
                <div className="flex items-center gap-x-2 w-full">
                    <div className="rounded-full bg-slate-400 h-10 w-10"></div>
                    {/* Name and Posted at lines */}
                    <div className="flex flex-col gap-y-2">
                        <div className="h-2 bg-slate-400 rounded w-32"></div>
                        <div className="h-2 bg-slate-400 rounded w-28"></div>
                    </div>
                </div>
            </div>
            {/* Action button */}
            <div className="animate-pulse w-6 h-6 bg-slate-400 rounded-md my-auto"></div>
        </div>
    );
}
