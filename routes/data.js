const express = require("express");
const router = express.Router();

/* POST data */
router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;