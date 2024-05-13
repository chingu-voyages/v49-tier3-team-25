import { Router } from "express";
import { signUp } from "../controllers/auth";
const router =Router();

router.put('/signup',signUp);

export{router};