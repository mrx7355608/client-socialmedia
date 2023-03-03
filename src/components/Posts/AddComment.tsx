import { useAuth } from "@/contexts/auth/context";

export default function AddComment() {
    const { state } = useAuth();
    return (
        <div className="absolute bottom-0 bg-white w-full flex items-center justify-center gap-x-2 mt-2 p-3">
            <img className="w-8 h-8 rounded-full" src={state.user?.profilePicture} />
            <input
                className="rounded-full w-full p-2 px-3  bg-gray-200 text-sm"
                type="text"
                placeholder="Type your comment here"
            />
            <button className="rounded-md p-1 px-3 pb-1.5 bg-gray-900 text-white text-sm font-medium">
                Post
            </button>
        </div>
    );
}
