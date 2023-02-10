import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
    const [validaionError, setValError] = React.useState(null);

    return (
        <div className="font-sans p-4 bg-transparent w-full">
            <MyInput
                name="email"
                type="email"
                placeholder="Email address"
                error={validaionError}
            />
            <MyInput
                name="password"
                type="password"
                placeholder="Password"
                error={validaionError}
            />
            <p className="underline mb-6 text-sm">Forgot Password?</p>
            <button className="py-2 text-lg w-full rounded-md bg-gray-900 text-white font-medium">
                Login
            </button>
            {/* Divider */}
            <hr className="my-5 bg-gray-900" />
            <button className="text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-lg w-full rounded-md bg-transparent font-medium">
                <FaFacebook
                    size="20px"
                    style={{
                        display: "inline",
                        marginRight: "10px",
                        color: "inherit",
                    }}
                />
                <span>Facebook</span>
            </button>
            <button className="my-3 text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-lg w-full rounded-md bg-transparent font-medium">
                <span>
                    <Link to="/auth/signup">Create account</Link>
                </span>
            </button>
            <button className="text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-lg w-full rounded-md bg-transparent font-medium">
                <span>Continue as Guest</span>
            </button>
        </div>
    );
}

function MyInput({
    name,
    type,
    placeholder,
    error,
}: {
    name: string;
    type: string;
    placeholder: string;
    error: any;
}) {
    return (
        <div className="flex flex-col items-start justify-center">
            <input
                className="w-full px-4 py-2 rounded-md bg-transparent border-2 border-gray-900"
                name={name}
                type={type}
                placeholder={placeholder}
            />
            <span className="mb-3 font-sm text-red-600 font-medium">
                {error && error.type === type ? error.message : null}
            </span>
        </div>
    );
}
