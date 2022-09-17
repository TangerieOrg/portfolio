import { createSafeContext, useSafeContext } from "@modules/SafeContext";
import { ComponentType } from "preact";
import { AuthenticationContextType } from "./types";

const AuthenticationContext = createSafeContext<AuthenticationContextType>();


export function useAuthentication() {
    const context = useSafeContext(AuthenticationContext);

    return {
        authenticated: process.env.NODE_ENV === "development"
    };
}

export function withAuthentication<P extends object>(Component : ComponentType<P>) {
    const auth : AuthenticationContextType = {};

    return (props : P) => (
        <AuthenticationContext.Provider value={auth}>
            <Component {...props}/>
        </AuthenticationContext.Provider>
    )
}