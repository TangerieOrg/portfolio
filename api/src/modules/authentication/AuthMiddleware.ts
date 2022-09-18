import { Request, Response, NextFunction } from "express";
import { getUser } from "./util";

export default async function AuthMiddleware(req : Request, res : Response, next : NextFunction) {
    req.user = await getUser(req.signedCookies["sso"])
    
    next();
}
