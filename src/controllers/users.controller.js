import {usersCollection, sessionsCollection} from '../database/db.js'

export async function signUp (req, res){
    const user = req.body;
  
    try {
      const hashPassword = bcrypt.hashSync(user.password, 10);
  
      await usersCollection.insertOne({ ...user, password: hashPassword });
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

export async function signIn(req, res) {
    const token = uuidV4();
    const {name} = req.body
    try {

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
      res.send({ name, token });

    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }