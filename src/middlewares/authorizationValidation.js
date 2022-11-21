import { transactionsCollection, usersCollection } from "../database/db.js";

export async function authorizationValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const transaction = await transactionsCollection.findOne({ token });
    const user = await usersCollection.findOne({ _id: transaction?.userId });

    if (!user) {
      return res.sendStatus(401);
    }

    req.user = user;
    //res.locals.user = user
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }


  next();
}