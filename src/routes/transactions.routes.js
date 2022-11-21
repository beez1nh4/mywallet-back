import { Router } from "express";
import { authorizationValidation } from "../middlewares/authorizationValidation.js";
import { addTransaction, findTransactions} from "../controllers/transactions.controller.js";

const router = Router();

router.use(authorizationValidation)

/* router.post("/transactions", transactionBodyValidation, addTransaction); */
router.post("/transactions", addTransaction);
router.get("/transactions", findTransactions);

export default router;