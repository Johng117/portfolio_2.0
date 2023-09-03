const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const pool = require("./db.jsx");

app.use(cors());
app.use(express.json());

app.use("/messages", require("./routes/messages.jsx"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
