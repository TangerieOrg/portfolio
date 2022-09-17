import { Router } from "express";
import { getTrackingData } from "./util";

export const router = Router();

router.get("/", async (req, res) => {
    const userData = await getTrackingData(req, res);



    res.json(userData);
});
