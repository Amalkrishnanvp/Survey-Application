const express = require("express");
const router = express.Router();

/* GET - Render Registration page */
router.get("/", (req, res) => {
  res.render("register");
});

/* POST - Handle Registration logic */
router.post("/", (req, res) => {
  res.send("registration success");
});

module.exports = router;
