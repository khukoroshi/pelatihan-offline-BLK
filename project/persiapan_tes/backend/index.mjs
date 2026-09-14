import express from "express";
import "dotenv/config";
import db from "./db/db.mjs";

const PORT = process.env.PORT || 3000;

const app = express();

// A simple SELECT query
try {
  const [results, fields] = await db.query("SELECT * FROM siswa");

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
