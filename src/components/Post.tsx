import { IPost } from "@/pages/Home";
import { BiLike, BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Post({ postData }: { postData: IPost }) {
    return (
        <div className="flex flex-col p-4 pb-2 my-3 rounded-lg shadow-md bg-white">
            {/* Author */}
            <div className="flex mb-3 gap-x-2 items-center">
                <img
                    src={postData.author.profilePicture}
                    alt="author"
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <Link to={"/users/" + postData.author.authorId}>
                        <p className="text-gray-800 text-sm font-medium hover:underline">
                            {postData.author.fullname}
                        </p>
                    </Link>
                    <p className="text-xs font-medium text-gray-500">
                        {new Date(postData.createdAt).toDateString()}
                    </p>
                </div>
            </div>

            {/* Post body */}
            <p className="mb-5 mt-1">{postData.body}</p>

            {/* Total likes and comments on post */}
            <div className="text-gray-400 mb-2">
                {/* TODO: use icons */}
                <span className="mr-3 text-xs">{postData.likes.length} Likes</span>
                <span className="text-xs">{postData.comments.length} Comments</span>
            </div>

            <hr className="mb-2" />

            {/* Like and Comment button */}
            <div className="flex gap-x-2 bg-transparent">
                {/* TODO: use icons */}
                <button className="bg-transparent hover:bg-gray-200 flex-1 rounded-md font-medium text-sm p-1.5">
                    <BiLike
                        size="18px"
                        style={{
                            display: "inline",
                            color: "inherit",
                            marginRight: "7px",
                        }}
                    />
                    Like
                </button>
                <button className="bg-transparent hover:bg-gray-200 flex-1 rounded-md font-medium text-sm p-1.5">
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
            </div>
        </div>
    );
}
