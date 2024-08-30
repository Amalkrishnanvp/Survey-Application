const { MongoClient } = require("mongodb");
require("dotenv").config();

// Connection string
const uri = process.env.MONGO_URI;
const dbName = "surveyDB";

let db;

async function connectToDb() {
  try {
    // Create client object
    const client = new MongoClient(uri);
    // Connect to database
    await client.connect();
    console.log("Connected to MongoDB");

    // Access database and collection
    db = client.db(dbName);
    console.log("connected to database");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getDb };
