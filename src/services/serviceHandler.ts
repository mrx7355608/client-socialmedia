import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "axiosInstance";

interface IMyResponse {
    success: boolean;
    data: any;
    error: string | null;
}

export default function serviceHandler(serviceFunc: (data: any | null) => Promise<AxiosResponse>) {
    // Main handler function
    return async function (data: any | null = null): Promise<IMyResponse> {
        try {
            const response = await serviceFunc(data);
            return handleResponse(response);
        } catch (err: any) {
            return handleError(err);
        }
    };

    // Helper functions
    function handleResponse(response: AxiosResponse): IMyResponse {
        return {
            success: true,
            error: null,
            data: response.data,
        };
    }
    function handleError(err: AxiosError): IMyResponse {
        let errorMessage = "An un-expected error occured";
        if (err.response) errorMessage = (err.response.data as any).error;
        if (err.request) errorMessage = "It seems that server is down";
        return {
            success: false,
            error: errorMessage,
            data: null,
        };
    }
}
