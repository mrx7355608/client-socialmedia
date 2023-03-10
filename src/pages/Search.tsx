import UserBoxAnimations from "@/components/SkeletonAnimations/UserBoxAnimations";
import { ISearchResult } from "interfaces/search.interface";
import { UserServices } from "@/services/user.services";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth/context";
import { useToast } from "@/contexts/toast/context";
import useSearch from "@/hooks/useSearch";

export default function SearchPage() {
    const loc = useLocation()
    const [page, setPage] = useState<number>(1);
    const { isMoreContent, searchResults, err } = useSearch(page);

    return (
        <>
            <h2 className="text-lg font-bold text-gray-800 mt-5">
                Showing results for {new URLSearchParams(loc.search).get("user")}
            </h2>
            {err ? (
                <h3 className="text-lg font-bold text-red-600 mt-5">{err}</h3>
            ) : (
                <InfiniteScroll
                    dataLength={searchResults.length}
                    next={() => setPage(page + 1)}
                    hasMore={isMoreContent}
                    loader={
                        <>
                            <UserBoxAnimations />
                            <UserBoxAnimations />
                            <UserBoxAnimations />
                        </>
                    }
                    scrollThreshold={0.9}
                    endMessage={
                        <p className="text-gray-400 text-center font-medium">
                            No more search resutls to show
                        </p>
                    }
                >
                    {searchResults.map((user) => {
                        return <User key={user._id} user={user} />;
                    })}
                </InfiniteScroll>
            )}
        </>
    );
}

// User component
function User({ user }: { user: ISearchResult }) {
    const [loading, setLoading] = useState<boolean>(false);
    const { state: authState } = useAuth();
    const userServices = new UserServices();
    const { showSuccessToast, showErrorToast } = useToast()

    async function sendRequest(userId: string) {
        setLoading(true)
        const { success, error, data } = await userServices.sendFriendRequest(userId);
        setLoading(false)
        if (success) return showSuccessToast(data.message);
        if (error) return showErrorToast(error);
        return showErrorToast("An un-expected error occured");
    }

    return (
        <div className="bg-white rounded-lg p-4 my-2 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={user.profilePicture}
                        alt="friend"
                    />
                    <div className="flex flex-col gapy-y-1">
                        <Link to={"/users/" + user._id}>
                            <p className="text-gray-800 text-sm font-medium hover:underline">
                                {user.fullname}
                            </p>
                        </Link>
                        <p className="font-medium text-gray-500 text-xs">Tue Feb 3 2021</p>
                    </div>
                </div>
                {
                    authState.user?.friends.includes(user._id) 
                    || authState.user?._id === user._id
                    ? null :
                    !loading ? 
                    <button onClick={async() => await sendRequest(user._id)} className="text-white rounded-md bg-gray-800 p-2 font-medium text-sm">
                            Add friend
                            </button>
                            :
                            <button className="text-white rounded-md bg-gray-800 p-2 font-medium text-sm">
                                Sending request... 
                            </button>
                }
            </div>
        </div>
    );
}
