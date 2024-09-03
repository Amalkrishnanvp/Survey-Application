const express = require("express");
const bcrypt = require("bcryptjs");
const { getDb } = require("../../config/db");

const router = express.Router();

/* GET - Render Login page */
router.get("/", (req, res) => {
  res.render("pages/login");
});

/* POST - Handle login logic */
router.post("/", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;
  const db = getDb();
  console.log(db);

  try {
    const adminCollection = db.collection("admin");
    const usersCollection = db.collection("users");

    // Check if the login user is admin
    const user = await adminCollection.findOne({ email });

    // If not admin, check if the user is a regular user
    if (!user) {
      // Check if the user is a regular user
      user = await usersCollection.findOne({ email });
    }

    if (user.role === "admin") {
      res.send("Admin dashboard");
    } else if (user.role === "user") {
      // Compare provided password with hashed password
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).send("Password incorrect");
      }

      res.send("User dashboard");
    } else {
      res.send("Invalid credentials");
    }
  } catch (error) {
    return res.status(500).send("Error logging in");
  }
});

module.exports = router;
