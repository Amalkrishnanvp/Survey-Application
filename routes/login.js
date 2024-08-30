const express = require("express");
const bcrypt = require("bcryptjs");
const { getDb } = require("../db");

const router = express.Router();

/* GET - Render Login page */
router.get("/", (req, res) => {
  res.render("login");
});

/* POST - Handle login logic */
router.post("/", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  const db = getDb();
  console.log(db);

  try {
    const usersCollection = db.collection("users");

    // Check if the user exists
    const user = await usersCollection.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    // Compare provided password with hashed password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).send("Password incorrect");
    }

    res.send("login successfull");
  } catch (error) {
    return res.status(500).send("Error logging in");
  }
});

module.exports = router;
