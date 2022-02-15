const express = require("express")
const db = require('./db')

let app = express()

app.use(express.json())

app.get('/', function(req,res) {
  res.send('Welcome')
})

app.post("/tambah-belajar", async (req, res) => {
  try {
    const nama_peserta = req.body.nama_peserta
    const materi = req.body.materi
    const query = `insert into belajar (nama_peserta, materi) values($1, $2) returning *`

    await db.query(query, [nama_peserta, materi], (err, result) => {
      console.log(result)
      res.json(result.rows[0])
    })

  } catch(error) {
    console.log(`Ini error ${error.message}`)
  }
})

app.delete("/delete-belajar/:id", async (req, res) => {
  const id = req.params.id;
  const query = `delete from belajar where id_belajar = $1`
  await db.query(query, [id], (err, result) => {
    console.log(result)
    res.json("Delete success")
  })
})

app.get('/belajar', async function(req,res){
  try{
    const query = `SELECT * FROM belajar`
    const result = await db.query(query)
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch(error){
    console.log('GET Error /belajar')
    res.status(500).send(error.message)
  }
})

app.patch('/belajar/:id', async function(req,res){
  try{
    const nama_peserta = req.body.nama_peserta
    const materi = req.body.materi
    const id = req.params.id;
    const query = `UPDATE belajar set nama_peserta = $1, materi = $2 where id_belajar = $3`
    const result = await db.query(query, [nama_peserta, materi, id])
    res.status(200).send({
      success: true,
      data: result.rows
    })
  } catch(error){
    console.log('GET Error /belajar')
    res.status(500).send(error.message)
  }
})

app.get('/belajar/:id', async function(req,res){
  try{
    const query = `SELECT * FROM belajar where id_belajar = $1`
    const id = req.params.id;
    const result = await db.query(query, [id])

    if (result.rows.length > 0)
    {
      res.status(200).send({
        success: true,
        data: result.rows
      })
    }else{
      res.status(200).send({
        success: true,
        data: "Data not found"
      })
    }

  } catch(error){
    console.log('GET Error /belajar')
    res.status(500).send(error.message)
  }
})

app.listen(8080, () => {
  console.log("server berjalan di port 8080")
})