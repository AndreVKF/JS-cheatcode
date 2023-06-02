const aprovados = ["Lupet", "Ludovico", "Bolota", "Lupercio"]

// forEach
// arg 1 => item
// arg 2 => index
// arg3 => full array

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach((nome) => console.log(nome))

const exibirAprovados = (aprovado) => console.log(`created func ${aprovado}`)
aprovados.forEach(exibirAprovados)

// create function on prototype
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}: ${nome}`)
})
