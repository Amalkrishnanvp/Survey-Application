const express = require("express");
const router = express.Router();

// Admin Dashboard
router.get("/dashboard", (req, res) => {
  res.render("admin/admin-dashboard");
});

module.exports = router;
