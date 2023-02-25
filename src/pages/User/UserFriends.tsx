import Spinner from "@/components/Spinner";
import { UserServices } from "@/services/user.services";
import React, { useEffect, useState } from "react";

interface IUserFriend {
    _id: string;
    firstname: string;
    lastname: string;
    profilePicture: string;
}

export default function UserFriends() {
    const userServices = new UserServices();
    const [friends, setFriends] = useState<Array<IUserFriend>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(function () {
        (async function () {
            const { success, data } = await userServices.getMyFriends();
            setLoading(false);
            if (success) {
                return setFriends((data as any).friends);
            }
        })();
    }, []);

    if (loading) return <Spinner />;
    return (
        <div>
            {friends.map((frnd) => (
                <Friend key={frnd._id} friend={frnd} />
            ))}
        </div>
    );
}

function Friend({ friend }: { friend: IUserFriend }) {
    return (
        <div className="p-3 rounded-lg bg-white shadow-sm">
            <p className="text-xl font-medium text-purple-700">
                {friend.firstname} {friend.lastname}
            </p>
        </div>
    );
}
