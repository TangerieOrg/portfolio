declare namespace Express {
    export interface Request {
        tracking : string;
        redis : ReturnType<typeof import("redis").createClient>,
        user?: import("@tangerie/authentication_middleware/lib/types").User
    }
}