function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49999, desc: 0.2 }

console.log(getPreco.call(carro)) // pass a context
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$")) // context and args
console.log(getPreco.apply(carro, [0.25, "BRL"])) // context and array of args
