export default function PendingRequests() {
    return (
        <>
            <h2 className="text-center font-serif font-bold text-3xl text-gray-800">
                Pending Requests
            </h2>
            <div className="p-3 flex flex-col shadow-md">
                <Request userName="Kashif khan" userImage="/user.png" />
                <Request userName="Kashif khan" userImage="/user.png" />
                <Request userName="Kashif khan" userImage="/user.png" />
                <Request userName="Kashif khan" userImage="/user.png" />
                <Request userName="Kashif khan" userImage="/user.png" />
                <Request userName="Kashif khan" userImage="/user.png" />
            </div>
        </>
    );
}


function Request({ userImage, userName }: { userImage: string; userName: string }) {
    return (
        <div className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-x-3">
                <img className="w-12 h-12 rounded-full" src={userImage} alt="friend" />
                <p className="font-medium text-gray-800 text-lg">{userName}</p>
            </div>
            <div className="flex w-full mt-6 gap-x-3">
                <button onClick={acceptRequest} className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-gray-700 font-medium">
                    Accept
                </button>
                <button onClick={rejectRequest} className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-red-600 font-medium">
                    Reject 
                </button>
            </div>
        </div>
    );

    function rejectRequest () {}
    function acceptRequest () {}
}
