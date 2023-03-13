import { IPendingRequest, IUser } from "./state";

export enum IAuthActionTypes {
    Logout,
    UserFetched,
    AuthError,
    RequestFinished,
    Login,
    RequestAccepted,
    RequestRejected
}

// Logout action interface
export interface ILogoutAuth {
    type: IAuthActionTypes.Logout;
}

// RequestFinished action interface
export interface IRequestFinished {
    type: IAuthActionTypes.RequestFinished;
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

export interface ILogin {
    type: IAuthActionTypes.Login;
    payload: {
        user: IUser;
    };
}

export interface IRequestRejected {
    type: IAuthActionTypes.RequestAccepted,
    payload: {
        pendingRequests: IPendingRequest[]
    }
}

export interface IRequestAccepted {
    type: IAuthActionTypes.RequestAccepted,
    payload: {
        pendingRequests: IPendingRequest[]
    }
}

export type AuthActions = ILogoutAuth | IUserFetchedAuth | IAuthError | IRequestFinished | ILogin | IRequestAccepted | IRequestRejected;
