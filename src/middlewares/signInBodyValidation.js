import { usersCollection } from '../database/db.js'
import bcrypt from "bcrypt";
import { usersSchema } from '../models/users.model.js';

// valida se existe o usuário
// valida a senha
export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;
  const user = req.body;
  const  {error } = usersSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    console.log(errors)
    return res.status(400).send(errors);
  }

  const userExists = await usersCollection.findOne({ email });
  if (!userExists) {
    return res.sendStatus(401);
  }

  const rightPassword = bcrypt.compareSync(password, userExists.password);
  if (!rightPassword) {
    return res.sendStatus(401);
  }

  req.userSignin = userExists;

  next();
}