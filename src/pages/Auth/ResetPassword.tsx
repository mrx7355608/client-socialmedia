import { AuthServices } from "@/services/auth.services";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function ResetPassword() {
    const [loading, setLoading] = useState<boolean>(false);
    const [err, setError] = useState<string>("");
    const [resp, setResp] = useState<string>("");
    const [resetPassData, setData] = useState({
        password: "",
        confirmPassword: ""
    });
    const loc = useLocation();
    const authServices = new AuthServices();

    return (
        <div className="p-3 flex flex-col justify-center font-sans w-full max-w-md">
            <h3 className="font-serif font-bold text-3xl text-center">Reset Password</h3>
            <span className="font-medium text-red-600 mt-5">{err ? err : null}</span>
            <span className="font-medium text-green-600 mt-5">{resp ? resp : null}</span>
            <input
                className="rounded-md my-3 mt-1 border-2 border-gray-900 bg-transparent text-gray-900 font-medium px-3 py-2"
                type="password"
                name="password"
                placeholder="New password"
                onChange={onChangeHandler}
            />
            <input
                className="rounded-md border-2 border-gray-900 bg-transparent text-gray-900 font-medium px-3 py-2"
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                onChange={onChangeHandler}
            />
            <button onClick={reset} className="mt-8 rounded-md bg-gray-900 text-white font-medium py-2">
                { loading ? <BeatLoader size={8} color="white" /> : "Continue" }
            </button>
        </div>
    );

    function onChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        return setData({ ...resetPassData, [name]:value });
    }

    async function reset() {
        setLoading(true);
        const authToken = new URLSearchParams(loc.search).get("token");
        const { success, data, error } = await authServices.resetPassword({ token: authToken, ...resetPassData });
        setLoading(false);
        if (error) {
            setError(error);
            return setTimeout(() => setError(""), 5000);
        }
        if (success) {
            setResp(data.message);
            return setTimeout(() => setResp(""), 5000);
        }
        return setError("An un-expected error occured");
    }
}
