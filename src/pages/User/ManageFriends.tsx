import { CgProfile } from "react-icons/cg";
import { BiTrash } from "react-icons/bi";

export default function ManageFriends() {
    return (
        <div className="flex flex-col rounded-lg p-4">
            <h2 className="font-serif font-bold text-gray-800 text-2xl mt-3 mb-4">
                Manage Friends
            </h2>
            {/* List of all friends */}
            <div className="flex flex-col w-full gap-y-2">
                <Friend userImage="/user.png" userName="Zero two 002" />
                <Friend userImage="/user.png" userName="Jhon Wick" />
                <Friend userImage="/user.png" userName="Will Smith" />
                <Friend userImage="/user.png" userName="Modiji" />
                <Friend userImage="/user.png" userName="Vladimir Putin" />
            </div>
        </div>
    );
}

function Friend({ userImage, userName }: { userImage: string; userName: string }) {
    return (
        <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-x-3">
                <img className="w-12 h-12 rounded-full" src={userImage} alt="friend" />
                <p className="font-medium text-gray-800 text-lg">{userName}</p>
            </div>
            <div className="flex w-full mt-6 gap-x-3">
                <button className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-gray-700 font-medium">
                    <CgProfile
                        size="15px"
                        style={{ display: "inline", marginBottom: "3px", marginRight: "5px" }}
                    />
                    View Profile
                </button>
                <button className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-red-600 font-medium">
                    <BiTrash
                        size="15px"
                        style={{ display: "inline", marginBottom: "3px", marginRight: "5px" }}
                    />
                    Remove
                </button>
            </div>
        </div>
    );
}
