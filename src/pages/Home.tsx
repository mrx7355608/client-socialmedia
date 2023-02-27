import AddPost from "@/components/AddPost";
import Post from "@/components/Post";
import PostSkeletonLoadingAnimation from "@/components/SkeletonAnimations/PostAnimation";
import useTimeline from "@/hooks/useTimeline";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    // Fetch user timeline
    const { loading, error, timeline } = useTimeline();

    return (
        <div>
            <AddPost />
            {loading ? (
                <>
                    <PostSkeletonLoadingAnimation />
                    <PostSkeletonLoadingAnimation />
                    <PostSkeletonLoadingAnimation />
                </>
            ) : (
                timeline.map((post) => {
                    return <Post key={(post as any)._id} postData={post} />;
                })
            )}
        </div>
    );
}
