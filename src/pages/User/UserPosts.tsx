import useFetch from "@/hooks/useFetch";
import { IPost } from "interfaces/post.interface";
import Post from "../../components/Posts/Post";

export default function UserPosts() {
    const { loading, data: posts, err } = useFetch<IPost[]>("/posts/me", []);

    return (
        <div className="flex flex-col gap-y-4">
            {loading ? (
                <h3 className="font-medium">Loading...</h3>
            ) : (
                posts.map((post) => {
                    return <Post data={post} key={post._id} />;
                })
            )}

            {err ? <h3 className="text-red-600 font-medium text-lg">{err}</h3> : null}
        </div>
    );
}
