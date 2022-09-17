import { Request, Response } from "express";
import { CreateDatabase } from "../../modules/database";
import { TrackingInstance, TrackingVisit } from "./types";

export async function getTrackingData(req : Request, res : Response) {
    const data = await req.redis.json.get(`tracking:${req.tracking}`);

    return data;
}

export async function logRequest(req : Request, res : Response, visit : TrackingVisit) {
    visit.ts = Date.now();
    await req.redis.json.arrAppend(`tracking:${req.tracking}`, ".visits", visit as any);
}

