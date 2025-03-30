import { Router } from "express";
import { userLogin, userSignUp, getUser } from "../controller/controllerUser.js";

const router = Router();

router.post("/signUp", userSignUp);
router.post("/login", userLogin);
router.get("/:id", getUser);

export default router;
