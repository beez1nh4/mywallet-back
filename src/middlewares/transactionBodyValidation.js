import { transactionSchema } from "../models/transactions.model.js";

export async function transactionBodyValidation(req, res, next) {
    const transaction = req.body;
    const { error } = transactionSchema.validate(transaction, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }  
    next();
  }