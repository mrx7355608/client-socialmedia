import React, { useContext, createContext, useReducer } from "react";
import { authReducer } from "./reducer";
import { IAuthState, initialAuthState } from "./state";

const AuthContext = createContext<{
    state: IAuthState;
    dispatch: React.Dispatch<any>;
}>({ state: initialAuthState, dispatch: () => undefined });
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}
