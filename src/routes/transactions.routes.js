import { Router } from "express";
import { authorizationValidation } from "../middlewares/authorizationValidation.js";
import { addTransaction, findTransactions} from "../controllers/transactions.controller.js";
import { transactionBodyValidation } from "../middlewares/transactionBodyValidation.js";

const router = Router();

router.use(authorizationValidation)

router.post("/transactions", transactionBodyValidation, addTransaction);
router.get("/transactions", findTransactions);

export default router;