import {usersCollection, sessionsCollection} from '../database/db.js'
import bcrypt from 'bcrypt'
import { v4 as uuidV4 } from 'uuid'

export async function signUp (req, res){
    const user = req.body;
  
    try {
      const hashPassword = bcrypt.hashSync(user.password, 10);
  
      await usersCollection.insertOne({ ...user, password: hashPassword, passwordConfirmation: hashPassword });
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

export async function signIn(req, res) {
    const token = uuidV4();
    const {email} = req.body
    try {
    const userExists = await usersCollection.findOne({ email });
    const userSession = await sessionsCollection.findOne({ userId: userExists._id });
  
    if (userSession) {
        return res
          .status(401)
          .send({ message: "Você já está logado, saia para logar novamente" });
      }

      await sessionsCollection.insertOne({
        token,
        userId: userExists._id,
      });
      res.send({ name: userExists.name,
                 token });

    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }