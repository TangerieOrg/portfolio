import { Router } from "express";
import { getUser, loginUser, registerUser } from "../../modules/authentication/util";

const router = Router();

router.get("/login", async (req, res) => {
    if(!req.body.username || !req.body.password) return res.json(undefined);

    const cookie = await loginUser(req.body.username, req.body.password);
    if(!cookie) return res.json(undefined);

    res.cookie("sso", cookie, {
        signed: true
    })


    res.json(await getUser(cookie));
});

router.get("/user", (req, res) => {
    res.json(req.user);
})

router.get("/register", async (req, res) => {
    if(!req.body.username || !req.body.password) return res.json(undefined);

    await registerUser(req.body.username, req.body.password);
    res.json({});
});

export default router;