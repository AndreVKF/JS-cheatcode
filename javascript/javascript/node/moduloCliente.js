const moduloA = require("./moduloA")
const moduloB = require("./moduloB")

console.log(moduloA)
console.log(moduloB)

// client tries to find index.js file automatically

const http = require("http")
http
  .createServer((req, res) => {
    res.write("Bom dia")
    res.end()
  })
  .listen(8080)
