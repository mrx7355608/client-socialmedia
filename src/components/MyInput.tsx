import React from "react";

export default function MyInput({
    name,
    type,
    placeholder,
    onChangeHandler,
}: {
    name: string;
    type: string;
    placeholder: string;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="flex flex-col items-start justify-center">
            <input
                className="w-full px-4 py-2 rounded-md bg-transparent border-2 border-gray-900 mt-2"
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
}
