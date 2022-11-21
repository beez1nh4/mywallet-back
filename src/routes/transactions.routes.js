import { Router } from "express";
import { authorizationValidation } from "../middlewares/authorizationValidation";

const router = Router();

router.use(authorizationValidation)

router.post("/transactions", transactionBodyValidation, addTransaction);
router.get("/transactions", findTransactions);

export default router;