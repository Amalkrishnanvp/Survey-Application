const express = require("express");
const router = express.Router();

/* GET Home page */
router.get("/", (req, res) => {
  res.render("index", {
    title: "Survey Application",
    message: "Success",
    role: "none",
  });
});

module.exports = router;
