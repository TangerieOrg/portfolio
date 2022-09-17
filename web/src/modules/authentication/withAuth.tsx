import Login from "@routes/Login";
import { ComponentType } from "preact";
import { useAuthentication } from "./authentication";
import { Permission } from "./types";

export default function withAuthLogin<P extends object>(Component : ComponentType<P>, permissions : Permission[]) {
    return (props : P) => {
        const auth = useAuthentication();

        if(!auth.authenticated) return <Login/>

        return <Component {...props}/>
    }
}