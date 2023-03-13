import Spinner from "@/components/Spinner";
import useFetch from "@/hooks/useFetch";
import { IFriend } from "interfaces/friends.interface";
import { BiTrash } from "react-icons/bi";

export default function UserFriends() {
    const { loading, data: friends, err } = useFetch<IFriend[]>("/users/me/friends", []);

    if (loading) return <Spinner />;

    return (
        <div>
            <div className="flex justify-center flex-wrap gap-2">
                {err ? (
                    <h3 className="text-xl font-medium text-red-600 mt-5">{err}</h3>
                ) : (
                    friends.map((frnd) => <Friend key={frnd._id} friend={frnd} />)
                )}
            </div>
        </div>
    );
}

function Friend({ friend }: { friend: IFriend }) {
    return (
        <div className="p-3 rounded-lg bg-white shadow-lg mb-2 w-56">
            <div className="flex gap-x-2 items-center">
                <img className="w-12 h-12 rounded-full" src={friend.profilePicture} alt="profile" />
                <p className="font-medium text-gray-700">
                    {friend.firstname} {friend.lastname}
                </p>
            </div>
            <button className="mt-3 rounded-lg text-sm w-full p-2 bg-gray-200 text-red-600 font-medium">
                <BiTrash
                    style={{
                        display: "inline",
                        marginRight: "5px",
                        marginBottom: "3px",
                    }}
                />
                Remove
            </button>
        </div>
    );
}
