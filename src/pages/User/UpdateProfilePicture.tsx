import { UserServices } from "@/services/user.services";
import React, { useRef } from "react";

export default function UpdateProfilePicture() {
    const fileRef = useRef<HTMLInputElement>(null);
    const userServices = new UserServices();

    return (
        <div>
            <h3 className="text-xl font-serif font-bold text-gray-800">Update Profile Picture</h3>
            <input type="file" ref={fileRef} />
            <button
                onClick={async () => {
                    const form = new FormData();
                    const file = fileRef.current?.files?.item(0);
                    form.append("profilePicture", file as File);
                    const { success, data } = await userServices.updatePicture(form);
                    console.log(data);
                }}
            >
                Update Picture
            </button>
        </div>
    );
}
