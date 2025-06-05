const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 5000;

const pool = new Pool({
  user: "user",
  host: "postgres-db",
  database: "mydb",
  password: "password",
  port: 5432,
});

app.get("/api/hello", async (req, res) => {
  res.json({ message: "Hello from Node.js Backend with PostgreSQL!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
