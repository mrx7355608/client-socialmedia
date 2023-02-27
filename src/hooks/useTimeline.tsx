import { UserServices } from "@/services/user.services";
import React, { useEffect, useState } from "react";

export default function useTimeline() {
    const [loading, setLoading] = useState<boolean>(true);
    const [timeline, setTimeline] = useState<[]>([]);
    const [error, setError] = useState<string>("");
    const userServices = new UserServices();

    useEffect(() => {
        (async function () {
            const { success, data } = await userServices.getMyTimeline();
            setLoading(false);
            if (!success) {
                return setError(data as string);
            }
            return setTimeline(data as any);
        })();
    }, []);

    return { loading, timeline, error };
}
