import express from "express";

import dotenv from 'dotenv';
import analytics, { AnalyticsMiddleware } from "./routes/analytics";

import cookieMiddleware from "cookie-parser";
import { DatabaseMiddleware } from "./modules/database";
import { AuthMiddleware, Routes } from "@tangerie/authentication_middleware/lib";

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

app.get("/login", Routes.login);
app.get("/register", Routes.register);
app.get("/user", (req, res) => res.json(req.user));

app.listen(port, () => {
    console.log("Listening on port", port);
})