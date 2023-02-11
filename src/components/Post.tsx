export default function Post () {
    return (
        <div className="flex flex-col p-4 rounded-lg shadow-md bg-white">
            {/* Author */}
            <div className="flex mb-3 gap-x-2 items-center">
                <img src="/user.png" alt="author" className="w-12 h-12 rounded-full" />
                <div>
                    <p className="text-gray-800 font-medium">Zero Two 002</p>
                    <p className="text-sm font-medium text-gray-500">Posted on Fri 10 Mar</p>
                </div>
            </div>

            {/* Post body */}
            <p className="mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque quod tempore cupiditate explicabo consequatur repellat fugit reprehenderit, perferendis assumenda.</p>

            {/* Total likes and comments on post */}
            <div className="text-gray-400 mb-2">
                {/* TODO: use icons */}
                <span className="mr-3 ">1k Likes</span>
                <span className="">2.3k Comments</span>
            </div>

            {/* Like and Comment button */}
            <div className="flex gap-x-2 bg-transparent">
                {/* TODO: use icons */}
                <button className="flex-1 p-2 rounded-md bg-gray-200">Like</button>
                <button className="flex-1 p-2 rounded-md bg-gray-200">Comment</button>
            </div>
        </div>
    );
}