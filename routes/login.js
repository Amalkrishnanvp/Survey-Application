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

module.exports = router;
