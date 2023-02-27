import AddPost from "@/components/AddPost";
import Post from "@/components/Post";
import PostSkeletonLoadingAnimation from "@/components/SkeletonAnimations/PostAnimation";
import useTimeline from "@/hooks/useTimeline";
import { UserServices } from "@/services/user.services";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export interface IPost {
    author: {
        authorId: string;
        fullname: string;
        profilePicture: string;
        linkToProfile: string;
    };
    body: string;
    createdAt: Date;
    _id: string;
}

export default function Home() {
    const userServices = new UserServices();
    const [page, setPage] = useState(1);
    const [isMoreContent, setMoreContent] = useState(true);
    const [timeline, setTimeline] = useState<IPost[]>([]);

    useEffect(() => {
        // Update url's page query value
        const url = `/posts/me/timeline?page=${page}`;

        // Fetch user timeline
        (async () => {
            const { data } = await userServices.getMyTimeline<IPost[]>(url);
            if (data.length < 10) setMoreContent(false);
            setTimeline([...timeline, ...data]);
        })();
    }, [page]);

    return (
        <div>
            <AddPost />
            <InfiniteScroll
                dataLength={timeline.length}
                next={() => setPage(page + 1)}
                hasMore={isMoreContent}
                loader={<InfiniteScrollLoader />}
                scrollThreshold={0.9}
                endMessage={
                    <p className="text-gray-400 text-center font-medium">No more posts to show</p>
                }
            >
                {timeline.map((post) => {
                    return <Post key={post._id} postData={post} />;
                })}
            </InfiniteScroll>
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
