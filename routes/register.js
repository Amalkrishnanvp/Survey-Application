const express = require("express");
const router = express.Router();

const { MongoClient } = require("mongodb");
require("dotenv").config();

/* GET - Render Registration page */
router.get("/", (req, res) => {
  res.render("register");
});

/* POST - Handle Registration logic */
router.post("/", (req, res) => {
  res.send("registration success");
  console.log(req.body);

  // Registered new user's data
  const newUserDetails = req.body;

  async function main() {
    // Connection string
    const uri = process.env.MONGO_URI;
    // Create client object
    const client = new MongoClient(uri);

    const dbName = "amal";

    try {
      // Connect to database
      await client.connect();
      console.log("Connected to MongoDB");

      // Access database and collection
      const database = client.db(dbName);
      const collection = database.collection("users");

      // Insert data
      const first = await collection.insertOne(newUserDetails);
      console.log(first);
    } catch (error) {
      console.log("Some error occured: ", error);
    } finally {
      await client.close();
    }
  }

  main().catch(console.error);
});

module.exports = router;
