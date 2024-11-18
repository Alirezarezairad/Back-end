import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config';
const app = express();
const PORT = process.env.SECRET_EXAMPLE_PORT || 3000;
const KEY =process.env.SECRET_EXAMPLE_KEY;
const MONGODB_URL =process.env.MONGODB_URL;
const DB_NAME =process.env.DATABASE_NAME;
const client =new MongoClient(MONGODB_URL);
const db = client.db(DB_NAME)
app.get("/", (req, res) => {
    res.send(`Hallo von Backend-server. KEY:${KEY}`);
    console.log(req.url,req.method);
  });
  
  app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
  