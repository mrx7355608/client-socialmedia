import { AuthActions, IAuthActionTypes } from "./actions";
import { IAuthState } from "./state";

export function authReducer(state: IAuthState, action: AuthActions): IAuthState {
    switch (action.type) {
        case IAuthActionTypes.Logout:
            return { ...state, user: null };
        case IAuthActionTypes.AuthError:
            return { ...state, error: action.payload.error };
        case IAuthActionTypes.UserFetched:
            return { ...state, user: action.payload.user };

        default:
            return state;
    }
}
