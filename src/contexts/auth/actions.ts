import { IUser } from "./state";

export enum IAuthActionTypes {
    Logout,
    UserFetched,
    AuthError,
}

// Logout action interface
export interface ILogoutAuth {
    type: IAuthActionTypes.Logout;
}

// UserFetched action interface
export interface IUserFetchedAuth {
    type: IAuthActionTypes.UserFetched;
    payload: {
        user: IUser;
    };
}

// Error action interface
export interface IAuthError {
    type: IAuthActionTypes.AuthError;
    payload: {
        error: string;
    };
}

export type AuthActions = ILogoutAuth | IUserFetchedAuth | IAuthError;
