import AddPost from "@/components/AddPost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <AddPost />
        </div>
    );
}
