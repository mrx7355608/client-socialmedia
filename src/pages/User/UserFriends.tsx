import Spinner from "@/components/Spinner";
import useFetch from "@/hooks/useFetch";
import { IFriend } from "interfaces/friends.interface";

export default function UserFriends() {
    const { loading, data: friends, err } = useFetch<IFriend[]>("/users/me/friends", []);

    if (loading) return <Spinner />;

    return (
        <div>
            {err ? (
                <h3 className="text-xl font-medium text-red-600 mt-5">{err}</h3>
            ) : (
                friends.map((frnd) => <Friend key={frnd._id} friend={frnd} />)
            )}
        </div>
    );
}

function Friend({ friend }: { friend: IFriend }) {
    return (
        <div className="p-3 rounded-lg bg-white shadow-sm">
            <p className="text-xl font-medium text-purple-700">
                {friend.firstname} {friend.lastname}
            </p>
        </div>
    );
}
