const express = require("express")
const db = require('./db')

let app = express()

app.use(express.json())

app.get('/', function(req, res) {
  res.send('Welcome')
})

app.post("/tambah-materi", async (req, res) => {
  try {
    const { nama_materi } = req.body
    const query = `INSERT INTO materi (nama_materi) values($1) returning *`
    const data = await db.query(query, [nama_materi]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-materi/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const queryChecker = `SELECT * FROM peserta p LEFT JOIN materi m on p.id_materi = m.id_materi WHERE m.id_materi = $1`

    const result = await db.query(queryChecker, [id]);

    let success = false
    let message = "Materi dilarang dihapus"
    let data = null
    if (result.rows.length == 0) {
      const query = `DELETE FROM materi WHERE id_materi = $1`
      await db.query(query, [id]);
      success = true
      message = "Materi berhasil dihapus"
    }

    res.status(200).send({
      success: success,
      message: message,
      data: data
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.post("/tambah-peserta", async (req, res) => {
  try {
    const { nama, kelas, id_materi } = req.body
    const query = `INSERT INTO peserta (nama, kelas, id_materi) values($1, $2, $3) returning *`
    const data = await db.query(query, [nama, kelas, id_materi]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-peserta/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const queryChecker = `SELECT * FROM materi m LEFT JOIN nilai n ON n.id_materi = m.id_materi WHERE n.id_peserta = $1`
    const result = await db.query(queryChecker, [id]);

    let success = false
    let message = "Peserta dilarang dihapus"
    let data = null
    if (result.rows.length == 0) {
      const query = `DELETE FROM peserta WHERE id_peserta = $1`
      await db.query(query, [id]);
      success = true
      message = "Peserta berhasil dihapus"
    }

    res.status(200).send({
      success: success,
      message: message,
      data: data
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.post("/tambah-nilai", async (req, res) => {
  try {
    const { id_peserta, id_materi, nilai, huruf_mutu } = req.body
    const query = `INSERT INTO nilai (id_peserta, id_materi, nilai, huruf_mutu) values($1, $2, $3, $4) returning *`
    const data = await db.query(query, [id_peserta, id_materi, nilai, huruf_mutu]);
    res.status(200).send({
      success: true,
      data: data.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.delete("/delete-nilai/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = `DELETE FROM nilai WHERE id_nilai = $1`
    await db.query(query, [id]);
    res.status(200).send({
      success: true,
      data: null
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
})

app.listen(8080, () => {
  console.log("server berjalan di port 8080")
})