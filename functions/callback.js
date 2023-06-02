const fabricantes = ["Audi", "Mercedes", "BMW"]

function imprimir(nome, indice) {
  console.log(`${indice + 1} : ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante) => console.log(fabricante)) // executes function after something

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// sem callback
let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// com callback
notasBaixas = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas)

notasBaixas = notas.filter((nota) => nota < 7)

console.log(notasBaixas)
