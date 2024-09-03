const express = require("express");
const router = express.Router();

// Admin Dashboard
router.get("/dashboard", (req, res) => {
    res.render("user/user-dashboard");
});

module.exports = router;
