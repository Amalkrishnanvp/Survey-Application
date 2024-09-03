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
    let user = await adminCollection.findOne({ email });

    // If not admin, check if the user is a regular user
    if (!user) {
      // Check if the user is a regular user
      user = await usersCollection.findOne({ email });
    }

    // If the user is found, compare the provided password with hashed passowrd
    if (user) {
      if (user.role === "admin") {
        if (user.password === password) {
          res.redirect("/admin/dashboard");
        } else {
          res.send("Incorrect password");
        }
      } else if (user.role === "user") {
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return res.status(401).send("Incorrect password");
        }

        res.redirect("/user/dashboard");
      }
    } else {
      res.send("There is no user with provided username");
    }
  } catch (error) {
    return res.status(500).send("Error logging in");
  }
});

module.exports = router;
