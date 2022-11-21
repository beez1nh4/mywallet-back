import { sessionsCollection } from "../database/db";

export async function sessionsValidation(req, res, next){
    const {email} = req.body
    const userExists = await usersCollection.findOne({ email });
    const userSession = await sessionsCollection.findOne({ userId: userExists._id });
  
    if (userSession) {
        return res
          .status(401)
          .send({ message: "Você já está logado, saia para logar novamente" });
      }
    
    next()
}