import { transactionsCollection } from "../database/db";

export async function addTransaction (req, res){
    const {name, value, date, userLogged, isIncome} = req.body;
  
    try {

      await transactionsCollection.insertOne({ 
        name,
        value,
        date,
        userLogged,
        isIncome,
        userId: userLogged._id,
      });

      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

export async function findTransactions(req, res){
    try{

    }
}