import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import { UserServices } from "@/services/user.services";
import { ISearchResult } from "interfaces/search.interface";

export default function useSearch (page: number) {
    const loc = useLocation();
    const userServices = new UserServices();

    const [isMoreContent, setMoreContent] = useState(true);
    const [searchResults, setResults] = useState<ISearchResult[]>([]);
    const [err, setError] = useState<string>("");



    useEffect(
        function () {
            const searchQuery = new URLSearchParams(loc.search).get("user") as string;
            const url = `/users/search?user=${searchQuery}&page=${page}`;

            (async function () {
                const { success, data, error } = await userServices.search(url);
                if (error) return setError(error);
                if (success) {
                    if (data.length < 10) setMoreContent(false);
                    return setResults([...searchResults, ...data]);
                }
            })();
        },
        [page]
    )
    return { isMoreContent, searchResults, err }
}
