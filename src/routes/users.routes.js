import { Router } from "express";

const router = Router();

router.post("/sign-up", signUpBodyValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;