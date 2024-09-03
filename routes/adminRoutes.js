const express = require("express");
const router = express.Router();

// Admin Dashboard
router.get("/dashboard", (req, res) => {
  res.send("Welcome to the admin dashboard");
});

module.exports = router;
