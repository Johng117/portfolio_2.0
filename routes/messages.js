const router = require("express").Router();
const pool = require("../db.js");

router.get("/", (req, res) => {
  res.send({ message: "hello john" });
});

// router.post();

module.exports = router;
