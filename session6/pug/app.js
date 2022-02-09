const express = require('express')
const app = express()
const router = express.Router()
const port = 3005

app.set('views','./views')
app.set('view engine','pug')
app.use(router)

router.use('/', function(req, res, next) {
  console.log("Aplikasi sedang berjalan")
  next()
})

router.get('/', function(req, res) {
  res.render("index",
  { title: "Hey",
    message: "Hello there"})
})

app.listen(port, function() {
  console.log(`Server berjalan di port ${port}`)
})

