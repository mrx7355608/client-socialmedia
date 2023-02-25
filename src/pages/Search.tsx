import { UserServices } from "@/services/user.services";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ISearchResult {
    fullname: string;
    profilePicture: string;
    createdAt: Date;
}

export default function SearchPage() {
    const loc = useLocation();
    const userServices = new UserServices();
    const [loading, setLoading] = useState<boolean>(true);
    const [searchResults, setResults] = useState<Array<ISearchResult>>([]);

    useEffect(function () {
        // TODO: Search users
        (async function () {
            const searchQuery = new URLSearchParams(loc.search).get("user") as string;
            const { success, data } = await userServices.search(searchQuery);
            if (success) {
                return setResults(data as any);
            }
        })();
    }, []);

    return <div>Search</div>;
}
