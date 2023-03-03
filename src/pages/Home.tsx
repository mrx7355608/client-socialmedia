import AddPost from "@/components/Posts/AddPost";
import Post from "@/components/Posts/Post";
import PostSkeletonLoadingAnimation from "@/components/SkeletonAnimations/PostAnimation";
import { UserServices } from "@/services/user.services";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPost } from "interfaces/post.interface";

interface ITimeline {
    loading: boolean;
    err: string | null;
    posts: IPost[];
}
interface IPaginationData {
    isMore: boolean;
    page: number;
}

export default function Home() {
    const userServices = new UserServices();
    const [timeline, setTimeline] = useState<ITimeline>({
        loading: true,
        err: null,
        posts: [],
    });
    const [paginationData, setPaginationData] = useState<IPaginationData>({
        isMore: true,
        page: 1,
    });

    useEffect(() => {
        const { page } = paginationData;
        const { posts } = timeline;

        // Update url's page query value
        const url = `/posts/me/timeline?page=${page}`;

        // Fetch user timeline
        (async () => {
            const { success, data, error } = await userServices.getMyTimeline(url);
            if (error) return setTimeline({ ...timeline, err: error, loading: false });
            if (success) {
                if (data.length < 10) setPaginationData({ ...paginationData, isMore: false });
                return setTimeline({
                    ...timeline,
                    loading: false,
                    posts: [...posts, ...data],
                });
            }
        })();
    }, [paginationData.page]);

    return (
        <div>
            <AddPost />
            {timeline.err ? (
                <h3 className="text-2xl font-medium text-red-600 text-center mt-5">
                    {timeline.err}
                </h3>
            ) : (
                <InfiniteScroll
                    dataLength={timeline.posts.length}
                    next={() => {
                        const newPage = paginationData.page + 1;
                        setPaginationData({ ...paginationData, page: newPage });
                    }}
                    hasMore={paginationData.isMore}
                    loader={<InfiniteScrollLoader />}
                    scrollThreshold={0.9}
                    endMessage={
                        <p className="text-gray-400 text-center font-medium">
                            No more posts to show
                        </p>
                    }
                >
                    {timeline.posts.map((post) => {
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
