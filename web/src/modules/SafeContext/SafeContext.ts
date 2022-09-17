import { Context, createContext } from "preact";
import { useContext } from "preact/hooks";

export const EmptyContext = Symbol();
export type EmptyContextType = typeof EmptyContext;

export type SafeContext<T> = Context<EmptyContextType | T>;

export function createSafeContext<T>() {
    return createContext<T | EmptyContextType>(EmptyContext);
}

export function useSafeContext<T>(context : SafeContext<T>) {
    const data = useContext(context);
    if(data === EmptyContext) throw new Error(`Context ${context.displayName} not created`);
    return data
}