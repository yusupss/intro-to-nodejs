
exports.getPeserta = async (req, res) => {
  try {
    const query = `SELECT * FROM peserta`
    const result = await db.query(query);
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
}

exports.postPeserta = async (req, res) => {
  try {
    console.log("OIIIIIII")
    const { nama, kelas, id_materi } = req.body
    const query = `INSERT INTO peserta (nama, kelas, id_materi) values($1, $2, $3) returning *`
    const result = await db.query(query, [nama, kelas, id_materi]);
    res.status(200).send({
      success: true,
      data: result.rows[0]
    })
  } catch(error) {
    res.status(500).send(error.message)
  }
}