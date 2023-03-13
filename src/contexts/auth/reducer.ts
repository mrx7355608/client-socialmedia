import {
    AuthActions,
    IAuthActionTypes,
    IAuthError,
    ILogin,
    ILogoutAuth,
    IRequestAccepted,
    IRequestFinished,
    IRequestRejected,
    IUserFetchedAuth,
} from "./actions";
import { IAuthState, IPendingRequest, IUser } from "./state";

export function authReducer(state: IAuthState, action: AuthActions): IAuthState {
    switch (action.type) {
        case IAuthActionTypes.Login:
            return { ...state, user: action.payload.user };
        case IAuthActionTypes.Logout:
            return { ...state, user: null };
        case IAuthActionTypes.AuthError:
            return { ...state, error: action.payload.error, isLoading: false };
        case IAuthActionTypes.UserFetched:
            return { ...state, user: action.payload.user, isLoading: false };
        case IAuthActionTypes.RequestFinished:
            return { ...state, user: null, isLoading: false };
        case IAuthActionTypes.RequestAccepted:
            return { ...state, user: { ...state.user, pendingRequests: action.payload.pendingRequests }}
        case IAuthActionTypes.RequestRejected:
            return { ...state, user: { ...state.user, pendingRequests: action.payload.pendingRequests }}


        default:
            return state;
    }
}

// Dispatch functions
export function logoutUser(): ILogoutAuth {
    return {
        type: IAuthActionTypes.Logout,
    };
}

export function userDataFetched(data: IUser): IUserFetchedAuth {
    return {
        type: IAuthActionTypes.UserFetched,
        payload: { user: data },
    };
}

export function apiDown(): IAuthError {
    return {
        type: IAuthActionTypes.AuthError,
        payload: {
            error: "It seems that server is down",
        },
    };
}

export function requestFinishedProcessing(): IRequestFinished {
    return {
        type: IAuthActionTypes.RequestFinished,
    };
}

export function loginUser(user: IUser): ILogin {
    return {
        type: IAuthActionTypes.Login,
        payload: { user },
    };
}

export function requestAccepted(pendingRequests: IPendingRequest[]): IRequestAccepted {
    return {
        type: IAuthActionTypes.RequestAccepted,
        payload: { pendingRequests }
    }
}


export function requestRejected(pendingRequests: IPendingRequest[]): IRequestRejected {
    return {
        type: IAuthActionTypes.RequestRejected,
        payload: { pendingRequests }
    }
}
