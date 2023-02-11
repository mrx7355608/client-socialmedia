import Post from "@/components/Post";

export default function Profile() {
    return (
        <>
            {/* user image and some data */}
            <div className="p-5 bg-white rounded-lg shadow-md mb-5">
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
                <hr className="my-5" />
                <div>
                    <button className="mr-9 bg-transparent font-medium text-gray-900">
                        Photos
                    </button>
                    <button className="bg-transparent font-medium text-gray-900">
                        Friends
                    </button>
                </div>
            </div>

            {/* Posts */}
            <Post />
        </>
    );
}
