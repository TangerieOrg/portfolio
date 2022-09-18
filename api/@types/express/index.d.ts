declare namespace Express {
    export interface Request {
        tracking : string;
        redis : ReturnType<typeof import("redis").createClient>
        user?: import("../../src/modules/authentication/types").User
    }
}