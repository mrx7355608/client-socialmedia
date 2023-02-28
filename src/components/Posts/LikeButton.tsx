import { BiLike } from "react-icons/bi";

interface ILikeButtonProps {
    like: (id: string) => Promise<void>;
    postId: string;
}

export default function LikeButton({ like, postId }: ILikeButtonProps) {
    return (
        <button
            onClick={async () => await like(postId)}
            className="bg-transparent hover:bg-gray-200 flex-1 rounded-md font-medium text-sm p-1.5"
        >
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
    );
}
