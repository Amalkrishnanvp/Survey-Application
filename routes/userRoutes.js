const express = require("express");
const router = express.Router();

// Admin Dashboard
router.get("/dashboard", (req, res) => {
  res.send("Welcome to the user dashboard");
});

module.exports = router;
