import { useState } from "react";
import { AuthServices } from "@/services/auth.services";
import { BeatLoader } from "react-spinners";

export default function ForgotPassword() {
    const [err, setError] = useState<string>("");
    const [successResp, setResp] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const authServices = new AuthServices();

    return (
        <div className="w-full p-3">
            <div className="flex flex-col justify-center mx-auto max-w-md">
                <h3 className="font-serif font-bold text-2xl text-center">Forgot Password</h3>
                <span className="text-red-600 font-medium my-1 font-sans mt-3">{err ? err : null}</span>
                <span className="text-green-600 font-medium my-1 font-sans mt-3">{successResp ? successResp : null}</span>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="my-2 border-2 border-gray-900 font-medium rounded-md bg-transparent text-gray-900 py-2 px-3 w-full font-sans"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                />
                <button
                    disabled={!email || email.length < 1}
                    onClick={async () => await forgotPassword()}
                    className="hover:cursor-pointer disabled:opacity-75 mt-1 rounded-md bg-gray-900 text-white font-medium py-2 w-full font-sans"
                >
                { loading ? <BeatLoader size={8} color="white" /> : "Continue" }
                </button>
            </div>
        </div>
    );

    async function forgotPassword() {
        setLoading(true)
        const { success, data, error } = await authServices.forgotPassword(email);
        setLoading(false)

        if (success) {
            setResp(data.message);
            return setTimeout(() => setResp(""), 5000);
        }
        if (error) {
            setError(error);
            return setTimeout(() => setError(""), 5000);
        }
    }
}
