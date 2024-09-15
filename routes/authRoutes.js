const express = require("express");
const router = express.Router();

/* GET - Render Login page */
router.get("/", (req, res) => {
  res.render("login");
});

/* POST - Handle login logic */
router.post("/", (req, res) => {
  res.send("login success");
});

/* GET - Render Registration page */
router.get("/", (req, res) => {
  res.render("register");
});

/* POST - Handle Registration logic */
router.post("/", (req, res) => {
    res.send("registration success");
  });

module.exports = router;
