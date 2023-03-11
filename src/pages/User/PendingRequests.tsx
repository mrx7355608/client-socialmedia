import { useAuth } from "@/contexts/auth/context";
import { usePost } from "@/contexts/post/context";
import { useToast } from "@/contexts/toast/context";
import { UserServices } from "@/services/user.services";

export default function PendingRequests() {
    const { state } = useAuth()
    return (
        <>
            <h2 className="font-serif font-bold text-2xl my-5 text-gray-800">
                Pending Requests
            </h2>
            <div className="flex flex-col shadow-md">
                {
                    state.user?.pendingRequests.map(req => {
                            return <Request key={req.friendId} userId={req.friendId} userName={req.firstname + req.lastname} userImage={req.profilePicture} />
                        })
                }
            </div>
        </>
    );
}


function Request({ userImage, userName, userId }: { userImage: string; userName: string, userId: string }) {
    const userServices = new UserServices()
    const { state, dispatch } = useAuth()
    const { showErrorToast, showSuccessToast } = useToast()

    return (
        <div className="bg-white rounded-lg p-4 my-2 shadow-md">
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

    // TODO: add loading states
    async function rejectRequest () {
        const { success, error, data } = await userServices.rejectRequest(userId)
        console.log(data)
        if (success) {
            // dispatch(requestRejected())
            return showSuccessToast("Request rejected!")
        }

        if (error) return showErrorToast(error);
        return showErrorToast("An un-expected error occured")
     }

    async function acceptRequest () {
        const { success, error, data } = await userServices.acceptRequest(userId)
        console.log(data)
        if (success) {
            // dispatch(requestAccepted())
            return showSuccessToast("Request accepted!")
        }

        if (error) return showErrorToast(error);
        return showErrorToast("An un-expected error occured")
    }

}
