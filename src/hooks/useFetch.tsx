import axiosInstance from "../axiosInstance";
import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";

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
            .catch((error: AxiosError) => {
                setLoading(false);
                let errorMessage = "Something went wrong!";
                if (error.response) {
                    errorMessage = (error.response.data as any).error;
                } else if (error.request) {
                    errorMessage = "It seems that the server is down";
                }
                return setError(errorMessage);
            });
    }, []);

    return { err, loading, data };
}
