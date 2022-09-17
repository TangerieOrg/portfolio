import { randomBytes } from "crypto";
import { Request, Response } from "express";
import { CreateDatabase } from "../../modules/database";

export async function getTrackingData(req : Request, res : Response) {
    const db = await CreateDatabase();

    const cookie = getCookie(req, res);

   

    const data = await db.json.get(`tracker:${cookie}`);


    return data;
}

function getCookie(req : Request, res : Response) {
    let cookie = req.signedCookies["tracker"];
    if(!cookie) {
        cookie = randomBytes(20).toString("hex");
        res.cookie("tracker", cookie, {
            signed: true
        })
    }

    return cookie as string;
}