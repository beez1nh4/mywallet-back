import { Router } from "express";
import { signInBodyValidation } from "../middlewares/signInBodyValidation.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyValidation.js";
import { signIn, signUp } from "../controllers/users.controller.js";

const router = Router();

router.post("/sign-up", signUpBodyValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;