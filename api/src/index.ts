import express from "express";

import dotenv from 'dotenv';
import analytics, { AnalyticsMiddleware } from "./routes/analytics";
import auth from "./routes/auth";

import cookieMiddleware from "cookie-parser";
import { DatabaseMiddleware } from "./modules/database";
import AuthMiddleware from "./modules/authentication/AuthMiddleware";

dotenv.config();

const app = express();

app.set('trust proxy', true)

app.use(express.json());

app.use(cookieMiddleware(process.env.COOKIE_SECRET || "cookie_secret"));

app.use(DatabaseMiddleware);

app.use(AuthMiddleware);

app.use(AnalyticsMiddleware);

const port = process.env.PORT || 8080;

app.use("/analytics", analytics);

app.use("/", auth);

app.listen(port, () => {
    console.log("Listening on port", port);
})