import React from "react";

export default function Profile() {
    return (
        <>
            {/* user image and some data */}
            <div className="p-5 bg-white rounded-lg shadow-md">
                <img
                    src="/user.png"
                    className="rounded-full w-28 h-28 mx-auto mb-6"
                />
                <h3 className="text-center text-xl font-medium text-gray-800">
                    Zero Two 002
                </h3>
                <p className="text-center text-gray-500 font-medium">
                    zerotwo@life.com
                </p>
            </div>
            <div className="py-5">
                <button className="rounded-full py-3 px-6 bg-gray-300 font-medium text-gray-800 border-1 border-gray-900">
                    Photos
                </button>
            </div>
        </>
    );
}
