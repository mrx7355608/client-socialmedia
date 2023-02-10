export default function AddPost() {
    return (
        <div className="p-3 rounded-lg shadow-md flex justify-center items-center bg-white gap-x-2">
            {/* User Image */}
            <div className="rounded-full w-10 h-9 bg-black"></div>
            {/* Post body */}
            <input
                className="rounded-full w-full bg-gray-100 px-4 py-1.5"
                type="text"
                name="body"
                placeholder="Share your thoughts"
            />
        </div>
    );
}
