var fs = require("fs")

fs.open("buatbarulagi.txt", "w", function(err, file) {
  if (err) throw err
  console.log("Sukses yang kedua")
})