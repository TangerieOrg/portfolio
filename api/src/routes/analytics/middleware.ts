import { randomBytes } from "crypto";
import { NextFunction, Request, Response } from "express";
import { CreateDatabase } from "../../modules/database";
import { TrackingInstance } from "./types";

export async function AnalyticsMiddleware(req : Request, res : Response, next : NextFunction) {
    req.tracking = await getCookie(req, res);

    next();
}

async function createTrackingInstance(req : Request, cookie : string) {
    const data : TrackingInstance = {
        id: cookie,
        visits: []
    }

    await req.redis.json.set(`tracking:${cookie}`, ".", data as any);
}

async function getCookie(req : Request, res : Response) {
    let cookie = req.signedCookies["tracker"];
    if(!cookie) {
        cookie = randomBytes(20).toString("hex");
        res.cookie("tracker", cookie, {
            signed: true,
            expires: new Date(9999, 1)
        });
    }

    if(!await req.redis.exists(`tracking:${cookie}`)) { 
        await createTrackingInstance(req, cookie);
    }

    return cookie as string;
}