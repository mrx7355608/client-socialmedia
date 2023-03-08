import UserBoxAnimations from "@/components/SkeletonAnimations/UserBoxAnimations";
import { ISearchResult } from "interfaces/search.interface";
import { UserServices } from "@/services/user.services";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useLocation } from "react-router-dom";

export default function SearchPage() {
    const loc = useLocation();
    const userServices = new UserServices();

    const [page, setPage] = useState(1);
    const [isMoreContent, setMoreContent] = useState(true);
    const [searchResults, setResults] = useState<ISearchResult[]>([]);
    const [err, setError] = useState<string>("");

    useEffect(
        function () {
            const searchQuery = new URLSearchParams(loc.search).get("user") as string;
            const url = `/users/search?user=${searchQuery}&page=${page}`;

            (async function () {
                const { success, data, error } = await userServices.search(url);
                if (error) return setError(error);
                if (success) {
                    if (data.length < 10) setMoreContent(false);
                    return setResults([...searchResults, ...data]);
                }
            })();
        },
        [page]
    );

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
                    loader={<InfiniteScrollLoader />}
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

function InfiniteScrollLoader() {
    return (
        <>
            <UserBoxAnimations />
            <UserBoxAnimations />
            <UserBoxAnimations />
        </>
    );
}

function User({ user }: { user: ISearchResult }) {
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
                <button className="text-white rounded-md bg-gray-800 p-2 font-medium text-sm">
                    Add friend
                </button>
            </div>
        </div>
    );
}
