let valor // não inicializada
console.log(valor)
// console.log(valor2) raises Exception

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco) // gera undefined
// console.log(produto.preco.valor) // gera erro
