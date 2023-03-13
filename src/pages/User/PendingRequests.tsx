import { useAuth } from "@/contexts/auth/context";
import { useToast } from "@/contexts/toast/context";
import { useState } from "react";
import { UserServices } from "@/services/user.services";
import { requestAccepted, requestRejected } from "@/contexts/auth/reducer";
import { IPendingRequest } from "@/contexts/auth/state";

export default function PendingRequests() {
    const { state } = useAuth()
    return (
        <>
            <h2 className="font-serif font-bold text-2xl my-5 text-gray-800">
                Pending Requests
            </h2>
            <div className="flex flex-col">
                {
                    state.user?.pendingRequests.length < 1 ? 
                    <h3 className="font-medium text-xl text-gray-700 text-center">No pending requests</h3> 
                    : 
                    state.user?.pendingRequests.map(req => {
                            return <Request 
                                key={req.friendId} 
                                userId={req.friendId} 
                                userName={req.firstname + req.lastname} 
                                userImage={req.profilePicture} 
                            />
                        })
                }
            </div>
        </>
    );
}


function Request({ userImage, userName, userId }: { userImage: string; userName: string, userId: string }) {
    const userServices = new UserServices()
    const [acceptLoading, setAccpetLoading] = useState<boolean>(false);
    const [rejectLoading, setRejectLoading] = useState<boolean>(false);
    const { state, dispatch } = useAuth()
    const { showErrorToast, showSuccessToast } = useToast()

    return (
        <div className="bg-white rounded-lg p-4 my-2 shadow-md">
            <div className="flex items-center gap-x-3">
                <img className="w-12 h-12 rounded-full" src={userImage} alt="friend" />
                <p className="font-medium text-gray-800 text-lg">{userName}</p>
            </div>
            <div className="flex w-full mt-6 gap-x-3">
                { acceptLoading ?
                    <button className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-gray-700 font-medium">
                        Accepting...
                    </button>
                    :
                    <button onClick={acceptRequest} className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-gray-700 font-medium">
                        Accept
                    </button>
                }
                { rejectLoading ?
                    <button className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-red-600 font-medium">
                        Rejecting... 
                    </button>
                    : 
                    <button onClick={rejectRequest} className="text-sm flex-1 p-2 px-3 bg-gray-100 rounded-md pb-2.5 text-red-600 font-medium">
                        Reject 
                    </button>
                }
            </div>
        </div>
    );

    // Reject request
    async function rejectRequest () {
        const { success, error, data } = await userServices.rejectRequest(userId)
        const newPendingRequests = state.user?.pendingRequests.filter(p => p.friendId !== userId);
        if (success) {
            dispatch(requestRejected(newPendingRequests as IPendingRequest[]))
            return showSuccessToast("Request rejected!")
        }

        if (error) return showErrorToast(error);
        return showErrorToast("An un-expected error occured")
     }

    // Accept request
    async function acceptRequest () {
        const { success, error, data } = await userServices.acceptRequest(userId)
        const newPendingRequests = state.user?.pendingRequests.filter(p => p.friendId !== userId);
        if (success) {
            dispatch(requestAccepted(newPendingRequests as IPendingRequest[]))
            return showSuccessToast("Request accepted!")
        }

        if (error) return showErrorToast(error);
        return showErrorToast("An un-expected error occured")
    }

}
