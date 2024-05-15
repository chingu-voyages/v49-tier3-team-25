import { Router } from "express";
import { signUp } from "../controllers/auth";
import { login } from "../controllers/auth";

const router = Router();

router.put('/signup', signUp);

router.post('/login', login);

export { router };