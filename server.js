import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config';
const app = express();
const PORT = process.env.SECRET_EXAMPLE_PORT || 3000;
const KEY =process.env.SECRET_EXAMPLE_KEY;
const MONGODB_URL =process.env.MONGODB_URL;
const DB_NAME =process.env.DATABASE_NAME;
//mit mongodb verbinden
const client =new MongoClient(MONGODB_URL);

const db = client.db(DB_NAME);

app.get("/", async (req, res) => {
  try{
const docs = await db.collection("exampleCollection").find().toArray();
res.send(docs);
}catch(error){
  console.error(error)
  res.status(500)
}
  });

  app.post("/createDoc", async (req,res)=> {
   const content =req.body;
   try {
    const result = await db.collection("exampleColletion").insertOne(content);
    console.log(result);
    res.status(201).send(result)
   }catch (error){
    console.error(error);
    res.status(500)
   }

  });

  app.listen(PORT, () => {
    console.log(`Server läuft auf port:${PORT}`);
  });
  