function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
}

// WHILE
let opcao

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(opcao)
}

// DO WHILE
// at least one time repetition
let opcao2

do {
  opcao2 = getInteiroAleatorioEntre(-1, 10)
  console.log(opcao2)
} while (opcao2 != -1)

// FOR
for (let i = 0; i < 10; i++) {
  console.log(`i = ${i}`)
}

const notas = [6.7, 7.1, 3.4, 2.0, 3.8]
for (let j = 0; notas.length > j; j++) {
  console.log(`nota = ${notas[j]}`)
}

// FOR IN
const notas2 = [6.7, 7.1, 3.4, 2.0, 3.8]

for (let k in notas2) {
  console.log(`nota2 = ${notas2[k]}`)
}

const pessoa = {
  nome: "Lupet",
  sobrenome: "Bolota",
  idade: 6,
  peso: 27.5,
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

// break => leaves loop chain
// continue => go to next loop level
