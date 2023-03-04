import { UserServices } from "@/services/user.services";
import { IPost } from "interfaces/post.interface";
import { useEffect, useState } from "react";

export default function useTimeline(url: string) {
    const [err, setError] = useState<string>("");
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isMore, setIsMore] = useState<boolean>(true);
    const userServices = new UserServices();

    useEffect(() => {
        (async () => {
            const { success, data, error } = await userServices.getMyTimeline(url);
            if (error) return setError(error);
            if (success) {
                if (data.length < 10) setIsMore(false);
                return setPosts([...posts, ...data]);
            }
        })();
    }, [url]);

    return { err, posts, setPosts, isMore };
}
