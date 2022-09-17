import { Request, Response } from "express";
import { TrackingVisit } from "./types";

export async function getTrackingData(req : Request, res : Response) {
    const data = await req.redis.json.get(`tracking:${req.tracking}`);

    return data;
}

export async function logRequest(req : Request, res : Response, visit : Partial<TrackingVisit>) {
    const data : TrackingVisit = {
        data: visit.data ?? {},
        origin: visit.origin ?? "Unknown",
        route: visit.route ?? "Unknown",
        tags: visit.tags ?? [],
        ts: Date.now(),
        ip: req.ip,
        userAgent: req.headers["user-agent"] ?? "Unknown"
    }
    await req.redis.json.arrAppend(`tracking:${req.tracking}`, ".visits", data as any);
}

