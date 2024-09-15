const express = require("express");
const router = express.Router();

/* GET user page */
router.get("/", (req, res) => {
  res.render("user/user-dashboard", { role: "user" });
});

// Admin Dashboard
router.get("/dashboard", (req, res) => {
  res.render("user/user-dashboard", { role: "user" });
});

module.exports = router;
