import React from "react";

export default function Login() {
    const [validaionError, setValError] =  React.useState(null)

    return (
        <div className="p-4 bg-transparent">
            <MyInput
                name="email"
                type="email"
                placeholder="Email address"
                error={validaionError}
            />
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
                className="px-4 py-2 rounded-md bg-transparent border-2 border-gray-800"
                name={name}
                type={type}
                placeholder={placeholder}
            />
            <span className="my-2 font-sm text-red-600">
                {error ? error.message : null}
            </span>
        </div>
    );
}
