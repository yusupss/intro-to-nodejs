const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const querystring = require('querystring')

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/welcome", async function(req, res) {
  let page = req.query.page;
  let limit = req.query.limit;
  let nama = req.query.nama;
  let hasil = "";
  if (page > 5) {
    hasil = "Tidak Boleh"
  }else{
    hasil = "Kita tampilkan"
  }

  console.log('nama = '+ nama)
  console.log('page = '+ page)
  console.log('limit = '+ limit)


  res.send({
    nama, page, limit, hasil
  })
})

let server = app.listen(8080, function() {
  console.log("Server is listening on port 8080")
})