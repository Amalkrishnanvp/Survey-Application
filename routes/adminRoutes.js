const express = require("express");
const router = express.Router();

/* GET Admin page */
router.get("/", (req, res) => {
  res.render("admin/admin-dashboard", { role: "admin" });
});

// Admin Dashboard
router.get("/dashboard", (req, res) => {
  res.render("admin/admin-dashboard", { role: "admin" });
});

module.exports = router;
