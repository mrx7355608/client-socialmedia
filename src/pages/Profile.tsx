import Post from "@/components/Post";

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
                <button className="rounded-full py-2 px-6 bg-gray-800 font-medium text-white border-2 border-gray-900">
                    Photos
                </button>
                <button className="rounded-full py-2 px-6 bg-gray-800 font-medium text-white border-2 border-gray-900">
                   Friends 
                </button>
            </div>

            {/* Posts */}
            <Post />
        </>
    );
}