import AddPost from "@/components/Posts/AddPost";
import Post from "@/components/Posts/Post";
import PostSkeletonLoadingAnimation from "@/components/SkeletonAnimations/PostAnimation";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useTimeline from "@/hooks/useTimeline";

export default function Home() {
    // Todo: add `no internet connection` error handling
    const [page, setPage] = useState<number>(1);
    const { loading, err, posts, setPosts, isMore } = useTimeline(
        `/posts/me/timeline?page=${page}`
    );

    return (
        <div>
            <AddPost posts={posts} setPosts={setPosts} />
            {err ? (
                <h3 className="text-2xl font-medium text-red-600 text-center mt-5">{err}</h3>
            ) : !loading ? (
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => setPage(page + 1)}
                    hasMore={isMore}
                    loader={<InfiniteScrollLoader />}
                    scrollThreshold={0.9}
                    endMessage={
                        <p className="text-gray-400 text-center font-medium">
                            No more posts to show
                        </p>
                    }
                >
                    {posts.map((post) => {
                        return <Post key={post._id} data={post} />;
                    })}
                </InfiniteScroll>
            ) : (
                <InfiniteScrollLoader />
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
