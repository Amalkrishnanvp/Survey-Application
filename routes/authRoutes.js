const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { getDb } = require("../config/db");

const saltRounds = 10;

/* GET - Render Home page */
router.get("/", (req, res) => {
  res.render("index", {
    title: "Survey Application",
    message: "Success",
    role: "none",
  });
});

/* GET - Render Login page */
router.get("/login", (req, res) => {
  res.render("pages/login");
});

/* POST - Handle login logic */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const db = getDb();

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

/* GET - Render Registration page */
router.get("/register", (req, res) => {
  res.render("pages/register");
});

/* POST - Handle Registration logic */
router.post("/register", async (req, res) => {
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
    const userData = {
      name,
      email,
      password: hashedPassword,
      role: "user",
    };

    await usersCollection.insertOne(userData);

    res.status(201).send("user registered successfully");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
});

module.exports = router;
