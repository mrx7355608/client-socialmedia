import AddPost from "@/components/AddPost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    // const [user, setUser] = useState(null);
    // const navigateTo = useNavigate();

    // useEffect(() => {
    //     if (!user) {
    //         return navigateTo("/auth/login");
    //     }
    // }, []);

    return (
        <div>
            <AddPost />
        </div>
    );
}
