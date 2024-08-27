const express = require("express");
const router = express.Router();

const { MongoClient } = require("mongodb");

/* GET - Render Registration page */
router.get("/", (req, res) => {
  res.render("register");

  async function name(params) {
        
    const uri = "mongodb://localhost:27017";

  }
});

/* POST - Handle Registration logic */
router.post("/", (req, res) => {
  res.send("registration success");
  console.log(req.body);
});

module.exports = router;
