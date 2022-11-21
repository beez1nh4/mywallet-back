import { Router } from "express";

const router = Router();

router.post("/transactions", transactionsBodyValidation, addTransaction);
router.get("/transactions", findTransactions);

export default router;