const alunos = [
  { nome: "Lupet", nota: 5.1, bolsita: false },
  { nome: "Ludovico", nota: 8.9, bolsita: false },
  { nome: "Lupercio", nota: 10.0, bolsita: true },
  { nome: "Bolota", nota: 6.2, bolsita: true },
]

const resultado = alunos
  .map((al) => al.nota)
  .reduce(
    function (acumulador, atual) {
      console.log(acumulador, atual)
      return acumulador + atual
    },
    0.0 // initial value
  )
// if initial values not passed
// initial value => first array value and execution begins with second value

// total value
console.log(resultado)

const allAlunosBolsitas = alunos
  .map((al) => al.bolsita)
  .reduce((acumulador, atual) => {
    return acumulador && atual
  })

console.log(allAlunosBolsitas)

const isThereAtLeastOneBolsista = alunos
  .map((al) => al.bolsita)
  .reduce((acumulador, atual) => {
    return acumulador || atual
  })
console.log(isThereAtLeastOneBolsista)

Array.prototype.reduce2 = function (callback, initValue) {
  const initIndex = initValue ? 0 : 1
  let acumulador = initValue || this[0]
  for (let i = 0; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }

  return acumulador
}
