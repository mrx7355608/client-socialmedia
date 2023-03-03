import { Link } from "react-router-dom";

export interface IComment {
    text: string;
    _id: string;
    author: {
        _id: string;
        firstname: string;
        lastname: string;
        profilePicture: string;
    };
}

export default function Comment({ comment }: { comment: IComment }) {
    return (
        <div className="flex gap-x-2 bg-transparent mt-3">
            <img
                className="w-8 h-8 rounded-full"
                src={comment.author.profilePicture}
                alt="friend"
            />
            <div className="flex flex-col bg-gray-200 rounded-xl p-3 ">
                <Link to={`/users/${comment.author._id}`}>
                    <p className="text-gray-800 text-sm font-medium hover:underline">
                        {comment.author.firstname + " "} {comment.author.lastname}
                    </p>
                </Link>
                <p className=" text-gray-800 text-sm">{comment.text}</p>
            </div>
        </div>
    );
}
