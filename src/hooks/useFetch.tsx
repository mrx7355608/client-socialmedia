import axiosInstance from "../axiosInstance";
import React, { useEffect, useState } from "react";

export default function useFetch<T>(url: string, initialData: T) {
    const [loading, setLoading] = useState<boolean>(true);
    const [err, setError] = useState<string>("");
    const [data, setData] = useState<T>(initialData);

    useEffect(function () {
        axiosInstance
            .get(url)
            .then((resp) => {
                setLoading(false);
                setData(resp.data);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    return { err, loading, data };
}
