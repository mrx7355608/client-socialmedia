// User data interface
export interface IUser {
    fullname: string;
    profilePicture: string;
    pendingRequests: [];
    id: string;
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
