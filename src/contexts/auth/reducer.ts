import { AuthActions, IAuthActionTypes, IAuthError, IUserFetchedAuth } from "./actions";
import { IAuthState, IUser } from "./state";

export function authReducer(state: IAuthState, action: AuthActions): IAuthState {
    switch (action.type) {
        case IAuthActionTypes.Logout:
            return { ...state, user: null };
        case IAuthActionTypes.AuthError:
            return { ...state, error: action.payload.error, isLoading: false };
        case IAuthActionTypes.UserFetched:
            return { ...state, user: action.payload.user, isLoading: false };

        default:
            return state;
    }
}

// Dispatch functions
export function logoutUser() {
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
