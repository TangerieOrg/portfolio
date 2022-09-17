import { Router } from "express";
import { getTrackingData, logRequest } from "./util";

export const router = Router();

router.get("/", async (req, res) => {
    const userData = await getTrackingData(req, res);



    res.json(userData);
});

router.post("/log", async (req, res) => {
    await logRequest(req, res, req.body);
    res.json({});
});
