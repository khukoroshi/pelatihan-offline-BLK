import express from "express";
import "dotenv/config";
import db from "./config/db.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Selamat Datang di SI Register");
  // res.send("Hello World");
});

app.get("/api/siswa", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM siswa");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/siswa/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "SELECT * FROM siswa WHERE id = ?";
    const [rows] = await db.execute(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/siswa", async (req, res) => {
  try {
    const { nama, email, kelas } = req.body;
    const query = "INSERT INTO siswa (nama, email, kelas) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [nama, email, kelas]);

    res.status(201).json({
      message: "Siswa berhasil didaftarkan",
      siswaId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/siswa/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, email, kelas } = req.body;
    const query =
      "UPDATE siswa SET nama = ?, email = ?, kelas = ? WHERE id = ?";
    const [result] = await db.execute(query, [nama, email, kelas, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    res.status(200).json({ message: "Siswa berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/siswa/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "DELETE FROM siswa WHERE id = ?";
    const [result] = await db.execute(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Siswa tidak ditemukan" });
    }
    res.status(200).json({ message: "Siswa berhasil di kick" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
