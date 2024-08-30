const express = require("express");
const bcrypt = require("bcryptjs");
const { getDb } = require("../db");

const router = express.Router();
const saltRounds = 10;

/* GET - Render Registration page */
router.get("/", (req, res) => {
  res.render("register");
});

/* POST - Handle Registration logic */
router.post("/", async (req, res) => {
  console.log(req.body);

  // new user's data
  const { name, email, password } = req.body;
  const db = getDb();

  try {
    const usersCollection = db.collection("users");

    // Check if the user already exists
    const userExists = await usersCollection.findOne({ name });

    if (userExists) {
      return res.status(400).send("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Add new user with hashed password
    await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).send("user registered successfully");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
});

module.exports = router;
