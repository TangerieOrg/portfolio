import express from "express";
import path from "path";

import dotenv from 'dotenv';

import ApiRouter from "./api/api";

dotenv.config();

const app = express();



const DIST_PATH = path.join(__dirname, "../dist");

app.use(express.static(DIST_PATH));

console.log("Serving from", DIST_PATH);

app.use("/api", ApiRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(DIST_PATH, "index.html"))
})



const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Listening on port", port);
})