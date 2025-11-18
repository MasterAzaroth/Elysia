// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

// These variables will store the connection once it's created
let cachedClient = null;
let cachedDb = null;

export async function connectToDB() {
  if (!uri) {
    throw new Error("Please define MONGODB_URI in .env.local");
  }

  // If we already have a client and db, reuse them
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // If no connection yet, create a new one
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  // Save them in the cached variables
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
