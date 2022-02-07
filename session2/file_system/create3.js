var fs = require("fs")

fs.open("buatbarulagi.txt", "w+", function(err, file){
  if (err) throw err

  let content = "Hello saya student di Hacktiv8 Online Program"

  fs.writeFile(file, content, (err)=>{
    if (err) throw err
    console.log('Sukses yg ketiga')
  })

  fs.readFile(file, (err, data)=> {
    if (err) throw err
    console.log(data.toString('utf8'))
  })
})