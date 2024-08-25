const express = require("express");
const router = express.Router();

/* GET Registration page */
router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;