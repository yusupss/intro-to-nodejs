const express = require('express')
const app = express()

app.use('/', function(req, res, next) {
  console.log("Aplikasi sedang berjalan")
  next()
})

app.use('/table', function(req, res, next) {
  var shirt = true
  var shoes = true
  if (shirt && shoes){
    console.log("Aplikasi sedang berjalan saja")
    next()
  }else{
    res.send('<h1>Aplikasi berjalan<h1>')
  }
})

app.get('/table', function(req, res, next) {
  var shirt = true
  var shoes = true
  if (shirt && shoes){
    next()
  }
  res.send('<h1>Table berjalan1<h1>')
})

app.get('/table', function(req, res) {
  res.send('<h1>Table berjalan2<h1>')
})

app.get('/', function(req, res) {
  res.send('<h1>Aplikasi berjalan<h1>')
})

app.get('/about', function(req, res) {
  res.sendFile('./about.html', {root: __dirname})
})

app.get('/menu/:isiMenu/kelengkapan/:isiKelengkapan', function(req, res) {
  let message = ""
  let iMenu = req.params.isiMenu
  let iKelengkapan = req.params.isiKelengkapan
  if (iMenu == 1) {
    if (iKelengkapan == 'y') {
      message = "boleh duduk"
    }else{
      message = "tidak boleh duduk"
    }
  }else if (iMenu == 2){
    if (iKelengkapan == 'burger'){
      message = "Anda dapat Burger"
    }else{
      message = "tidak sesuai"
    }
  }else if (iMenu == 3){
    if (iKelengkapan == '24000'){
      message = "Sukses bayar"
    }else{
      message = "Gagal bayar"
    }
  }

  res.send(message)
})

app.get('/table/:amount',function( req, res) {
  var party = req.params.amount

  let partyName = ''
  if ( party == 1){
    partyName = 'Yusup'
  }else if ( party == 2){
    partyName = 'Rumah saya di Sleman Sembodo'
  }

  res.send('We are searching for your table for '+partyName)
})

app.post('/user',function( req, res) {
  const logText = "Running post method"
  console.log(logText)
  res.send(logText)
})

app.put('/user',function( req, res) {
  const logText = "Running post method"
  console.log(logText)
  res.send(logText)
})

app.delete('/user',function( req, res) {
  const logText = "Running delete method"
  console.log(logText)
  res.send(logText)
})

app.listen(3005, function() {
  console.log("Server berjalan di port 3000")
})

