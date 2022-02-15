const express = require("express")
const db = require('./db')

let app = express()

app.use(express.json())

global.db = db;
const pesertaRoutes = require('./routes/peserta.route')
const materiRoutes = require('./routes/materi.route')
const nilaiRoutes = require('./routes/nilai.route')

app.use('/peserta', pesertaRoutes)
app.use('/materi', materiRoutes)
app.use('/nilai', nilaiRoutes)


app.listen(8080, () => {
  console.log("server berjalan di port 8080")
})