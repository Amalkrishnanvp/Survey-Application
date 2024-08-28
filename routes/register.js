const express = require("express");
const router = express.Router();

const { MongoClient } = require("mongodb");

/* GET - Render Registration page */
router.get("/", (req, res) => {
  res.render("register");
});

/* POST - Handle Registration logic */
router.post("/", (req, res) => {
  res.send("registration success");
  console.log(req.body);
  const registrationData = req.body;

  async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    const dbName = "amal";

    try {
      await client.connect();
      console.log("Connected to MongoDB");

      const database = client.db(dbName);
      const collection = database.collection("user");

      const first = await collection.insertOne(registrationData);
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
