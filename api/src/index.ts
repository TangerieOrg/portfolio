import express from "express";

import dotenv from 'dotenv';
import analytics from "./routes/analytics";

import cookieMiddleware from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieMiddleware(process.env.COOKIE_SECRET || "cookie_secret"))


const port = process.env.PORT || 8080;

app.use("/analytics", analytics);

app.listen(port, () => {
    console.log("Listening on port", port);
})