import joi from "joi";

export const transactionSchema = joi.object({
  name: joi.string().required(),
  value: joi.number().required(),
  date: joi.string().required(),
  userLogged: joi.string().required(),
  isIncome: joi.boolean(),
});
