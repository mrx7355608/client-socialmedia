import AddPost from "@/components/Posts/AddPost";
import Post from "@/components/Posts/Post";
import PostSkeletonLoadingAnimation from "@/components/SkeletonAnimations/PostAnimation";
import { UserServices } from "@/services/user.services";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPost } from "interfaces/post.interface";

export default function Home() {
    const userServices = new UserServices();
    const [page, setPage] = useState(1);
    const [err, setError] = useState<string>("");
    const [isMoreContent, setMoreContent] = useState(true);
    const [timeline, setTimeline] = useState<IPost[]>([]);

    useEffect(() => {
        // Update url's page query value
        const url = `/posts/me/timeline?page=${page}`;

        // Fetch user timeline
        (async () => {
            const { success, data, error } = await userServices.getMyTimeline(url);
            if (error) return setError(error);
            if (success) {
                if (data.length < 10) setMoreContent(false);
                return setTimeline([...timeline, ...data]);
            }
        })();
    }, [page]);

    return (
        <div>
            <AddPost />
            {err ? (
                <h3 className="text-2xl font-medium text-red-600 text-center mt-5">{err}</h3>
            ) : (
                <InfiniteScroll
                    dataLength={timeline.length}
                    next={() => setPage(page + 1)}
                    hasMore={isMoreContent}
                    loader={<InfiniteScrollLoader />}
                    scrollThreshold={0.9}
                    endMessage={
                        <p className="text-gray-400 text-center font-medium">
                            No more posts to show
                        </p>
                    }
                >
                    {timeline.map((post) => {
                        return <Post key={post._id} data={post} />;
                    })}
                </InfiniteScroll>
            )}
        </div>
    );
}

function InfiniteScrollLoader() {
    return (
        <>
            <PostSkeletonLoadingAnimation />
            <PostSkeletonLoadingAnimation />
            <PostSkeletonLoadingAnimation />
        </>
    );
}
