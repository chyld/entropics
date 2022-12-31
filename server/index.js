const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const { choose } = require("./math");

const port = 3001;
const db = new sqlite3.Database("./data.db");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const { problem, answer } = choose()();
  res.json({ problem, answer });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
