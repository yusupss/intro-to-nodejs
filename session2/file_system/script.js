var fs = require("fs")
var http = require("http")

http.createServer(function(request, response){
  fs.readFile("tiana.html", (err, data) => {
    if (err) throw err

    response.writeHead(200, {
      "Contet-Type" : "text/html"
    })
    response.write(data)
    response.end()
  })
}).listen(8000)

console.log("server running on http://localhost:8000")