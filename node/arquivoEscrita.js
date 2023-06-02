const fs = require("fs")

const produto = {
  nome: "Calculadora",
  preco: 1234.99,
  desconto: 0.2,
}

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo salvo!!")
  }
)
