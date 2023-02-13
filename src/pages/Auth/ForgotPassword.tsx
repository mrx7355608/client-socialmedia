import { useState } from "react";

export default function ForgotPassword() {
    const [error, setError] = useState<string>("");

    return (
        <div className="w-full p-3">
            <h3 className="font-serif font-bold text-3xl text-center">Forgot Password</h3>
            <input
                className="border-2 border-gray-900 font-medium rounded-lg bg-transparent text-gray-900 py-2 px-3"
                type="email"
                placeholder="Enter your email address"
                name="email"
            />
            <span className="text-red-600 font-medium my-1">{error ? error : null}</span>
            <button
                onClick={forgotPassword}
                className="rounded-lg bg-gray-900 text-white font-medium py-2"
            >
                Continue
            </button>
        </div>
    );

    function forgotPassword() {}
    function validateEmail() {}
}
