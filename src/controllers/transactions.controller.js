import { transactionsCollection, sessionsCollection, usersCollection } from "../database/db.js";

export async function addTransaction (req, res){
    const {description, value, date, userLogged, isIncome} = req.body;
    const user = req.user;
    try {

      await transactionsCollection.insertOne({ 
        description,
        value,
        date,
        userLogged,
        isIncome,
        userId: user._id,
      });

      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

export async function findTransactions(req, res){
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
    try {
        const session = await sessionsCollection.findOne({ token });
        const user = await usersCollection.findOne({ _id: session?.userId });
    
        if (!user) {
          return res.sendStatus(401);
        }
    
        const transactions = await transactionsCollection.find({ userId: session?.userId }).toArray();
        res.send(transactions);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
}