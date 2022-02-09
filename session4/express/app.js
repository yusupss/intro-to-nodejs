const express = require('express')
const app = express()

app.use('/', function(req, res, next) {
  console.log("Aplikasi sedang berjalan")
  next()
})

app.get('/', function(req, res) {
  res.send('Aplikasi berjalan')
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

app.listen(3000, function() {
  console.log("Server berjalan di port 3000")
})

