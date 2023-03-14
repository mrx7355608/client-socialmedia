import { Link } from "react-router-dom";
import MyInput from "@/components/MyInput";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AuthServices } from "@/services/auth.services";
import { BeatLoader } from "react-spinners";

export default function Signup() {
    const authServices = new AuthServices()
    const [err, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [successResp, setSuccessResp] = useState<string>("");
    const [signupData, setSignupData] = useState({
        firstname: "",
        lastname: "",
        email : "",
        password: "",
        confirmPassword: "",
    })

    return (
        <div className="font-sans w-full p-4 bg-transparent max-w-md">
            { err &&  <p className="font-medium text-sm my-2 text-red-600 p-3 w-full bg-red-200">{err}</p> }
            { successResp &&  <p className="font-medium text-sm my-2 text-green-600 p-3 w-full bg-green-200">{successResp}</p> }
            <div className="flex items-center w-full gap-x-2">
                <MyInput
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    onChangeHandler={onChangeHandler}
                />
                <MyInput
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    onChangeHandler={onChangeHandler}
                />
            </div>
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
            <MyInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChangeHandler={onChangeHandler}
            />

            {/* Signup button */}
            { loading ?
                <button className="mt-5 py-2 text-md w-full rounded-md bg-gray-900 text-white font-medium">
                    <BeatLoader size={8} color="white" />
                </button>
                :
                <button onClick={signUp} className="mt-5 py-2 text-md w-full rounded-md bg-gray-900 text-white font-medium">
                    Signup
                </button>
            }

            <hr className="my-5 bg-gray-900" />

            {/* Signup with facebook */}
            <button className="mt-2 text-gray-900 flex items-center justify-center py-2 border-2 border-gray-900 text-md w-full rounded-md bg-transparent font-medium">
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


    function onChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        return setSignupData({ ...signupData, [name]:value })
    }

    async function signUp () {
        setLoading(true)
        const { success, data, error } = await authServices.signup(signupData);
        setLoading(false)
        if (error) {
            setError(error);
            return setTimeout(() => setError(""), 5000)
        }
        if (success) {
            setSuccessResp(data.message);
            return setTimeout(() => setSuccessResp(""), 5000)
        }
        return setError("An un-expected error occured");
    }
}
