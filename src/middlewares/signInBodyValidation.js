import { usersCollection } from '../database/db.js'
import bcrypt from "bcrypt";

// valida se existe o usuário
// valida a senha
export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;

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