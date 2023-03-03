import Spinner from "@/components/Spinner";
import { UserServices } from "@/services/user.services";
import React, { useEffect, useState } from "react";

interface IUserFriend {
    _id: string;
    firstname: string;
    lastname: string;
    profilePicture: string;
}

interface IFriendsState {
    loading: boolean;
    err: string | null;
    friends: IUserFriend[];
}

export default function UserFriends() {
    const userServices = new UserServices();
    const [userFriendsData, setData] = useState<IFriendsState>({
        loading: true,
        err: null,
        friends: [],
    });

    useEffect(function () {
        (async function () {
            const { success, data, error } = await userServices.getMyFriends();
            if (error) return setData({ ...userFriendsData, err: error });
            if (success) {
                return setData({ ...userFriendsData, friends: data.friends, loading: false });
            }
        })();
    }, []);

    if (userFriendsData.loading) return <Spinner />;

    return (
        <div>
            {userFriendsData.err ? (
                <h3 className="text-xl font-medium text-red-600 mt-5">{userFriendsData.err}</h3>
            ) : (
                userFriendsData.friends.map((frnd) => <Friend key={frnd._id} friend={frnd} />)
            )}
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
