import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MyInput from "@/components/MyInput";
import { AuthServices } from "../../services/auth.services";
import { BeatLoader } from "react-spinners";

export default function Login() {
    const authServices = new AuthServices();
    const navigateTo = useNavigate();
    const [error, setError] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: "",
    });

    return (
        <div className="font-sans p-4 bg-transparent w-full max-w-md">
            <p className="text-red-600 font-medium text-sm">{error ? error : null}</p>
            <MyInput
                name="email"
                type="email"
                placeholder="Email address"
                onChangeHandler={onChangeHandler}
            />
            <MyInput
                name="password"
                type="password"
                placeholder="Password"
                onChangeHandler={onChangeHandler}
            />
            <p className="underline mb-6 text-sm">Forgot Password?</p>
            {!loading ? (
                <button
                    onClick={async () => await onClickHandler()}
                    className="py-2 text-md w-full rounded-md bg-gray-900 text-white font-medium"
                >
                    Login
                </button>
            ) : (
                <button
                    disabled
                    className="py-2 text-md w-full rounded-md bg-gray-900 text-white font-medium"
                >
                    <BeatLoader size={8} color="white" />
                </button>
            )}
            {/* Divider */}
            <hr className="my-5 bg-gray-900" />

            {/* Login with facebook btn */}
            <button className="text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-md w-full rounded-md bg-transparent font-medium">
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

            {/* Create account btn */}
            <button className="my-3 text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-md w-full rounded-md bg-transparent font-medium">
                <span>
                    <Link to="/auth/signup">Create account</Link>
                </span>
            </button>

            {/* login as guest btn */}
            <button className="text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-md w-full rounded-md bg-transparent font-medium">
                <span>Continue as Guest</span>
            </button>
        </div>
    );

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    }

    async function onClickHandler() {
        setLoading(true);
        const response = await authServices.login(loginData);
        setLoading(false);
        if (!response.success) {
            setError(response.message as string);
            return setTimeout(() => setError(""), 7000);
        }
        // Redirect to homepage on successfull login
        return navigateTo("/");
    }
}
