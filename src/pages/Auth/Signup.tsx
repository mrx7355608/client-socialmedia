import { Link } from "react-router-dom";
import MyInput from "@/components/MyInput";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";

export default function Signup() {
    const [validationError, setError] = useState(null);

    return (
        <div className="font-sans w-full p-4 bg-transparent">
            <MyInput
                name="firstname"
                type="text"
                placeholder="First name"
                error={validationError}
            />
            <MyInput
                name="lastname"
                type="text"
                placeholder="Last name"
                error={validationError}
            />
            <MyInput
                name="email"
                type="email"
                placeholder="Email address"
                error={validationError}
            />
            <MyInput
                name="password"
                type="password"
                placeholder="Password"
                error={validationError}
            />
            <MyInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                error={validationError}
            />
            <button className="mt-5 py-2 text-lg w-full rounded-md bg-gray-900 text-white font-medium">
                Signup
            </button>
            <hr className="my-5 bg-gray-900" />
            <button className="mt-2 text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-lg w-full rounded-md bg-transparent font-medium">
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

            <p className="text-center mt-7">
                Already have an account?{" "}
                <span className="font-medium underline">
                    <Link to="/auth/login">Login</Link>
                </span>
            </p>
        </div>
    );
}
