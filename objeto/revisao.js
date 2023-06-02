// coleção dinamica de pares chave/valor
const produto = new Object()
produto.nome = "Cadeira"
produto["marca de produto"] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca de produto"]
console.log(produto)

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [{ nome: "Lupet" }, { nome: "Ludovico" }],
  calcularValorSeguro: function () {},
}

carro.proprietario.endereco.logradouro = "Av Bolota"
carro["proprietario"]["endereco"]["numero"] = 1234
console.log(carro)

delete carro.condutores
console.log(carro.condutores) // returns undefined
console.log(carro.condutores[0]) // returns error
