const router = require("express").Router();
const pool = require("../db.js");

router.get("/", (req, res) => {
  res.send({ message: "hello john" });
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  let date = new Date();
  const saveMessage = await pool.query(`INSERT INTO messages(sender_name,sender_email,sender_message,message_sent) VALUES ($1, $2, $3, $4) RETURNING *`,[name, email,message, date])
  console.log(saveMessage.rows[0]);
  res.json(saveMessage.rows[0]);
});

module.exports = router;
