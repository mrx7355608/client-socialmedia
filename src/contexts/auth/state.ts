export interface IPendingRequest {
    friendId: string;
    firstname: string;
    profilePicture: string;
    lastname: string;
}

// User data interface
export interface IUser {
    firstname: string;
    lastname: string;
    profilePicture: string;
    pendingRequests: IPendingRequest[];
    friends: string[];
    _id: string;
}

// Auth context interface
export interface IAuthState {
    user: IUser | null;
    error: string | null;
    isLoading: boolean;
}

// Auth context initial data
export const initialAuthState: IAuthState = {
    user: null,
    error: null,
    isLoading: true,
};
