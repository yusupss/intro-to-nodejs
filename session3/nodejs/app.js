const http = require('http')

http.createServer((req, res) => {
  res.write("Hello Worldddd yes good")

  res.end()
}).listen(8000)

console.log("Server berjalan di port 8000")